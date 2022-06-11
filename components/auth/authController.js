const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Librarian = require('../librarian/librarianModel');

exports.loginLibrarian = (req, res) => {
  const { username, password } = req.body;
  const librarian = await Librarian.findOne({ username });
  if (!librarian) {
    return res.status(401).json({
      success: false,
      message: 'Librarian not found',
    });
  }
  if (!bcrypt.compareSync(password, librarian.password)) {
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