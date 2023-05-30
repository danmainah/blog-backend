const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.users = async (res) => {
  res.json('the users page');
}
exports.signup = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
if (!email || !password) {
    res.status(400).json({
      message: "Please provide your email and password"
    })
  }
 const user = await User.findOne({ email }).select("+password");
 if (!user || !(await user.comparePassword(password, user.password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }  
  const token = jwt.sign({ id: user._id, name: user.fullname }, 'secret', { expiresIn: '2h' });
  req.session.name = user.fullname
  req.session.id = user._id
  res.json({ message: 'Logged in successfully', token });
};

