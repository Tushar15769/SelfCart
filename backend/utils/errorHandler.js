const errorHandler = (err, req, res, next) => {
  console.error('Server error:', err.message);

  if (err.name === 'ValidationError') {
    return res.status(400).json({ success: false, message: err.message });
  }

  if (err.code === 11000) {
    return res.status(400).json({ success: false, message: 'Duplicate field value' });
  }

  return res.status(500).json({ success: false, message: 'Server error' });
};

export default errorHandler;
