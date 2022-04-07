// 1. Import dependencies
const express =  require('express')
const router = express.Router()

const User = require('../../models/user')


//Creating one
router.post("/" , async (req, res) => {
    // console.log("REq data :", req)
    const user = new User({
        name: {first: req.body.first, last: req.body.last},
        email: req.body.email,
        address: req.body.address,
        password: req.body.password
    })
    // console.log(req);
    try{
        const checkExists = (await User.findOne({email: req.body.email}))
        console.log("checkExists :",checkExists)
        if(checkExists == null){
                const newUser = await user.save(function(err){
                    if(err){
                        console.log("Error in adding ",err);
                        return;
                    }
                    console.log("User created successfully");
                    return res.status(200).send({message: "User created successfully"})
            });
        }else{
           return res.status(403).json({error: new Error("Email already exists")})
        }
    }catch(err){
        return res.status(400).json({message: err.message})
    }
})


module.exports = router