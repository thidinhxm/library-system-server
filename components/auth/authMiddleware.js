const jwt = require('jsonwebtoken');

exports.isLibrarian = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token',
      });
    }
    next();
  }
  catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}

exports.isLibrarianManager = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded)
    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: 'Invalid token',
      });
    }
    if (decoded.role !== '1') {
      return res.status(401).json({
        success: false,
        message: 'You are not a librarian manager',
      });
    }
    next();
  }
  catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
}