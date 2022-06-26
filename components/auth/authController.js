const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Librarian = require('../librarian/librarianModel');
const Reader = require('../reader/readerModel');

exports.loginLibrarian = async (req, res) => {
  const { username, password } = req.body;
  const librarian = await Librarian.findOne({ username });
  if (!librarian) {
    return res.status(401).json({
      success: false,
      message: 'Librarian not found',
    });
  }
  // if (!bcrypt.compareSync(password, librarian.password)) {
  if (password !== librarian.password) {
    return res.status(401).json({
      success: false,
      message: 'Wrong password',
    });
  }

  const payload = {
    id: librarian._id,
    username: librarian.username,
    role: librarian.role,
    
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
  
  return res.status(200).json({
    success: true,
    message: 'Login success',
    token: 'Bearer ' + token,
  });
}

exports.protected = (req, res) => {
  return res.status(200).json({
    success: true,
    librarian: {
      id: req.user._id,
      username: req.user.username,
    }
  });
}

exports.verifyEmailLibrarian = async (req, res) => {
  const { token } = req.params;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
    });
  }
  const librarian = await Librarian.findById(decoded.id);
  if (!librarian) {
    return res.status(401).json({
      success: false,
      message: 'Librarian not found',
    });
  }
  librarian.isValidated = true;
  await librarian.save();
  return res.status(200).json({
    success: true,
    message: 'Email verified',
  });
}
exports.verifyEmailReader = async (req, res) => {
  const { token } = req.params;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    return res.status(401).json({
      success: false,
      message: 'Invalid token',
    });
  }
  const reader = await Reader.findById(decoded.id);
  if (!reader) {
    return res.status(401).json({
      success: false,
      message: 'Reader not found',
    });
  }
  reader.isValidated = true;
  await reader.save();
  return res.status(200).json({
    success: true,
    message: 'Email verified',
  });
}