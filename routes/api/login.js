// 1. Import dependencies
const express =  require('express')
const bcrypt = require('bcrypt')
const router = express.Router()
const bodyParser = require('body-parser');
const User = require('../../models/user')
const jwt = require('jsonwebtoken');


router.post("/", async (req, res) => { 
    User.findOne({email: req.body.Username }).then(
        (user) => {
            if(!user){
                return res.status(401).json({message: "Invalid Username/ Username not found"});
            }
            console.log("Username ", req.body.Username," ",req.body.Password," ",user.password)
            if(req.body.Password === user.password){
                console.log("password crct")
                const accessToken = jwt.sign({userid: user._id}, process.env.ACCESS_TOKEN);
                console.log("Token :",accessToken)
                return res.status(200).json({ token: accessToken, userid: user._id })
            }else{
                return res.status(401).json({message: "Incorrect Password"});
            }
        }
    ).catch((error)=>{
        res.status(500).json({error: new Error(error)})
    })
});


module.exports = router