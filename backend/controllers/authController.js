import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { OAuth2Client } from 'google-auth-library';
import User from '../models/User.js';
import { validateRegisterInput, validateLoginInput, validateProfileInput } from '../validators/authValidator.js';

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const generateToken = (userId, email) => {
  return jwt.sign({ userId, email }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

const setTokenCookie = (res, token) => {
  const isProduction = process.env.NODE_ENV === 'production';
  res.cookie('token', token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: 'lax',
    secure: isProduction,
  });
};

const sanitizeUser = (user) => ({
  id: user._id,
  fullName: user.fullName,
  email: user.email,
  phone: user.phone,
  profileCompleted: user.profileCompleted,
});

export const googleAuth = async (req, res, next) => {
  try {
    const { credential } = req.body;
    if (!credential) {
      return res.status(400).json({ success: false, message: 'Credential required' });
    }

    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();

    const { sub: googleId, name: fullName, email, picture: avatar } = payload;

    let user = await User.findOne({ $or: [{ googleId }, { email }] });

    if (user) {
      if (!user.googleId) user.googleId = googleId;
      if (!user.avatar) user.avatar = avatar;
      if (!user.fullName) user.fullName = fullName;
      await user.save();
    } else {
      user = await User.create({
        googleId,
        email: email.toLowerCase(),
        fullName: fullName || '',
        avatar: avatar || '',
      });
    }

    const token = generateToken(user._id, user.email);
    setTokenCookie(res, token);

    return res.json({
      success: true,
      message: 'Google sign-in successful',
      data: { user: sanitizeUser(user) },
    });
  } catch (err) {
    next(err);
  }
};

export const register = async (req, res, next) => {
  try {
    const { email, password, fullName, phone } = req.body;

    const validationErrors = validateRegisterInput({ email, password, fullName, phone });
    if (validationErrors) {
      return res.status(400).json({ success: false, message: Object.values(validationErrors)[0], errors: validationErrors });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase().trim() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      fullName: fullName || '',
      phone: phone || '',
    });
    await user.save();

    return res.status(201).json({ success: true, message: 'Registration successful' });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const validationErrors = validateLoginInput({ email, password });
    if (validationErrors) {
      return res.status(400).json({ success: false, message: Object.values(validationErrors)[0], errors: validationErrors });
    }

    const input = email.trim();
    const isEmail = input.includes('@');
    let user;
    if (isEmail) {
      user = await User.findOne({ email: input.toLowerCase() });
    } else {
      user = await User.findOne({ phone: input });
    }

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user._id, user.email);
    setTokenCookie(res, token);

    return res.json({
      success: true,
      message: 'Login successful',
      data: { user: sanitizeUser(user) },
    });
  } catch (err) {
    next(err);
  }
};

export const logout = (req, res) => {
  res.clearCookie('token');
  return res.json({ success: true, message: 'Logged out' });
};

export const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    return res.json({ success: true, data: { user } });
  } catch (err) {
    next(err);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const { fullName, phone } = req.body;

    const validationErrors = validateProfileInput({ fullName, phone });
    if (validationErrors) {
      return res.status(400).json({ success: false, message: Object.values(validationErrors)[0], errors: validationErrors });
    }

    const update = { profileCompleted: true };
    if (fullName !== undefined) update.fullName = fullName.trim();
    if (phone !== undefined) update.phone = phone.trim();

    const user = await User.findByIdAndUpdate(
      req.user.userId,
      update,
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    return res.json({ success: true, message: 'Profile updated', data: { user } });
  } catch (err) {
    next(err);
  }
};
