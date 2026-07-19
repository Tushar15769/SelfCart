const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return 'Email is required';
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return 'Please enter a valid email address';
  }
  return null;
};

const validatePassword = (password) => {
  if (!password) {
    return 'Password is required';
  }
  if (password.length < 6) {
    return 'Password must be at least 6 characters';
  }
  return null;
};

const validatePhone = (phone) => {
  if (phone && phone.trim()) {
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length !== 10) {
      return 'Phone number must be exactly 10 digits';
    }
  }
  return null;
};

const validateFullName = (name) => {
  if (!name || !name.trim()) {
    return 'Full Name is required';
  }
  return null;
};

export const validateRegisterInput = ({ email, password, fullName, phone }) => {
  const errors = {};

  const emailErr = validateEmail(email);
  if (emailErr) errors.email = emailErr;

  const passwordErr = validatePassword(password);
  if (passwordErr) errors.password = passwordErr;

  if (fullName !== undefined) {
    const nameErr = validateFullName(fullName);
    if (nameErr) errors.fullName = nameErr;
  }

  if (phone !== undefined) {
    const phoneErr = validatePhone(phone);
    if (phoneErr) errors.phone = phoneErr;
  }

  return Object.keys(errors).length > 0 ? errors : null;
};

export const validateLoginInput = ({ email, password }) => {
  const errors = {};

  const emailErr = validateEmail(email);
  if (emailErr) errors.email = emailErr;

  const passwordErr = validatePassword(password);
  if (passwordErr) errors.password = passwordErr;

  return Object.keys(errors).length > 0 ? errors : null;
};

export const validateProfileInput = ({ fullName, phone }) => {
  const errors = {};

  const nameErr = validateFullName(fullName);
  if (nameErr) errors.fullName = nameErr;

  const phoneErr = validatePhone(phone);
  if (phoneErr) errors.phone = phoneErr;

  return Object.keys(errors).length > 0 ? errors : null;
};
