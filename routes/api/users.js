// 1. Import dependencies
const express = require("express");
const router = express.Router();
const jwt_decode = require('jwt-decode')

const User = require('../../models/user');


// //Gettig all
router.get("/all", async (req, res) => {
    try
    { 
       const users = await User.find();
       res.json(users)
    }catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }

})

//Getting one
router.get("/", getAccesstokenUser, (req, res) => {
    res.send(res.user);
})

//Getting name
router.get("/:id", getUser, (req, res) => {
    res.send(res.user);
})





//Updating one
router.patch("/:id", getUser, async(req, res) => {
    console.log("req body: ", req.body)
    if(req.body.name != null){
        res.user.name = req.body.name
    }
    if(req.body.address != null){
        res.user.address = req.body.address
    }
    if(req.body.mobile != null){
        res.user.mobile = req.body.mobile
    }
    if(req.body.email != null){
        res.user.email = req.body.email
    }
    if(req.body.registeredDate != null){
        res.user.registeredDate = req.body.registeredDate
    }
    if(req.body.password != null){
        res.user.password = req.body.password
    }
    if(req.body.dob != null){
        res.user.dob = req.body.dob
    }
    console.log("User res :", res.user);
    try{
        const updatedUser=  await res.user.save()
        console.log("Updated user Successfully");
        res.status(200).json({user: updatedUser, message: "Updated user successfully"})
    }catch(err){
        res.status(400).json({ error: err.message })
    }
})

//Deleting one
router.delete("/:id", getUser, async (req, res) => {
    try{
        await res.user.remove()
        res.json({message: 'Deleted user'})
    }catch(err){
        return res.status(500).json({message: err.message})
    }
})



async function getUser(req, res, next){
    let user;
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message: 'Cannot Find user'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.user = user;
    next()
}


async function getAccesstokenUser(req, res, next){
    let token =  jwt_decode(req.headers.token, {headers: true});
    console.log("Decoded token :", token.userid)
    try{
        user = await User.findById(token.userid)
        if(user == null){
            return res.status(404).json({message: 'Cannot Find user'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.user = user;
    next()
}



module.exports = router