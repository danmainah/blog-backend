const User = require('../models/user');

exports.users = async (res) => {
  res.json('the users page');
}
exports.signup = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};

exports.login = async (req, res) => {
  const {  email, password } = req.body;
if (  !email || !password) {
    res.status(400).json({
      message: "Please provide your email and password"
    })
  }
  const user = await User.findOne({ email }).select("+password");
 if (!user || !(await user.comparePassword(password, user.password))) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
};
