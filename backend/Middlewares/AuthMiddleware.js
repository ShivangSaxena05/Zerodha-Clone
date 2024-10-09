// const User = require("../model/UserModel"); // Assuming UserModel.js exports User
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.userVerification = async (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ status: false });
//   }

//   try {
//     const decoded = await jwt.verify(token, process.env.TOKEN_KEY);
//     const user = await User.findById(decoded.id);
//     if (user) {
//       return res.json({ status: true, user: user.username });
//     } else {
//       return res.json({ status: false, message: "User not found" });
//     }
//   } catch (err) {
//     return res.json({ status: false, message: "Invalid Token" });
//   }
// };