const User = require("../models/User.js");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER

const register = async (req, res) => {
    
    console.log(req.body.password,
        process.env.PASS_SEC);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //LOGIN

  const login =  async (req, res) => {
    try {
      console.log("inside")
      const user = await User.findOne({ username: req.body.username });

      if(!user){
        return res.status(401).json("Wrong credentials!");
      }
      
      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );
      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
  
      originalPassword !== req.body.password &&
        res.status(401).json("Wrong credentials!");
  
      const accessToken = jwt.sign(
        {
          id: user._id,
          isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
        {expiresIn:"3d"}
      );
  
      const { password, ...others } = user._doc;
  
      res.status(200).json({...others, accessToken});
      console.log("end")
    } catch (err) {
      res.status(500).json(err);
    }

};

module.exports = {
  register,
  login,
}