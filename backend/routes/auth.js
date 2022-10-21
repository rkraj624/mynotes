const express = require('express');
const User = require('../models/user');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = process.env.SECRET;

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('dob', 'dateOfBirth must be atleast 2 characters').isLength({ min: 2 }),
    body('country', 'country must be atleast 2 characters').isLength({ min: 5 }),
  ], async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }
    try {
        const { name, email, dob,country } = req.body
      // Check whether the user with this email exists already
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ success,error: "Sorry a user with this email already exists" })
      }
     let countryCode;

     if(country==="Andhra Pradesh"){
         countryCode="AP"
     } else if(country==="Andaman and Nicobar Islands"){
         countryCode="AN"
     }else if(country === "Arunachal Pradesh"){
         countryCode="ARP";
     }else if(country === "Assam") {
         countryCode="AS"
     }else if(country === "Bihar") {
         countryCode="BI"
     }else if(country === "Chandigarh") {
         countryCode="CAG"
     }else if(country === "Chhattisgarh") {
         countryCode="CG"
     }else if(country === "Dadar and Nagar Haveli") {
         countryCode="DNH"
     }else if(country === "Daman and Diu") {
         countryCode="DD"
     }else if(country === "Delhi") {
         countryCode="DE"
     }else if(country === "Lakshadweep") {
         countryCode="LD"
     }else if(country === "Puducherry") {
         countryCode="PC"
     }else if(country === "Goa") {
         countryCode="GO"
     }else if(country === "Gujarat") {
         countryCode="GU"
     }else if(country === "Haryana") {
         countryCode="HA"
     }else if(country === "Himachal Pradesh") {
         countryCode="HP"
     }else if(country === "Jammu and Kashmir") {
         countryCode="JK"
     }else if(country === "Jharkhand") {
         countryCode="JH"
     }else if(country === "Karnataka") {
         countryCode="KAR"
     }else if(country === "Kerala") {
         countryCode="KE"
     }else if(country === "Madhya Pradesh") {
         countryCode="MP"
     }else if(country === "Maharashtra") {
      countryCode="MH"
     }else if(country === "Manipur") {
      countryCode="MN"
     }else if(country === "Meghalaya") {
      countryCode="MG"
     }else if(country === "Mizoram") {
      countryCode="MZ"
     }else if(country === "Nagaland") {
      countryCode="NG"
     }else if(country === "Odisha") {
      countryCode="OD"
     }else if(country === "Punjab") {
      countryCode="PJ"
     }else if(country === "Rajasthan") {
      countryCode="RS"
     }else if(country === "Tamil Nadu") {
      countryCode="TN"
     }else if(country === "Telangana") {
      countryCode="TG"
     }else if(country === "Tripura") {
      countryCode="TP"
     }else if(country === "Uttar Pradesh") {
      countryCode="UP"
     }else if(country === "Uttarakhand") {
      countryCode="UK"
     }else if(country === "West Bengal") {
      countryCode="WB"
     }else{
       countryCode="00"
     }
     
     const users = await User.find({country})
     console.log(users);
     let helper;
     if(users.length < 10){

         helper = "00"+ users.length.toString();
     }
     else if(users.length<100 && users.length>10){

        helper = "0"+ users.length.toString();

     }
     else{
         helper = users.length.toString()
     }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(dob, salt);
      
      var date = new Date();

      const joiningYear = date.getFullYear()
      
      var components = [
          "MYNOTE",
          date.getFullYear(),
          countryCode,
          helper
          
      ];
      
      var registrationNumber = components.join("");
      // Create a new user
      user = await User.create({
        name,
        password: secPass,
        email,
        registrationNumber,
        joiningYear,
        dob,
        country

      });
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
  
  
      success=true;
      res.json({success, authtoken })
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })


// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('registrationNumber', 'Enter a valid registrationNumber').exists(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { registrationNumber, password } = req.body;
  try {
    let user = await User.findOne({ registrationNumber });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


// ROUTE 3: Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async (req, res) => {

  try {
    let userId = req.user.id;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})

// ROUTE 4: Get loggedin User Details using: POST "/api/auth/updatePassword". Login required
router.post('/updatepassword',
[
    body('registrationNumber', 'Enter a valid registrationNumber').exists(),
    body('oldPassword', 'Password cannot be blank').exists(),
    body('newPassword', 'Password cannot be blank').exists(),
    body('confirmNewPassword', 'Password cannot be blank').exists(),
  ],
 fetchuser,  async (req, res) => {

    try {
        
        const { registrationNumber, oldPassword, newPassword, confirmNewPassword } = req.body
        if (newPassword !== confirmNewPassword) {
            return res.status(400).json({ message: "Password Mismatched" });
        }
        const user = await User.findOne({ registrationNumber })
        const isCorrect = await bcrypt.compare(oldPassword, user.password)
        if (!isCorrect) {
            return res.status(404).json({ message: "Password Mismatched" });
        }
        let hashedPassword;
        hashedPassword = await bcrypt.hash(newPassword, 10)
        user.password = hashedPassword;
        await user.save()
        res.status(200).json({ message: "Password Updated" })
    }
    catch (err) {
        console.log("Error in updating password", err.message)
    }
})

module.exports = router