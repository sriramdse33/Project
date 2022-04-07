// 1. Import dependencies
const express = require("express");
const router = express.Router();

const Appointments = require('../../models/appointments');
const User = require('../../models/user');
const jwt_decode = require('jwt-decode')


//Gettig all events by userid
router.get("/", getAccesstokenUser, async (req, res) => {
    try
    { 
       const appointments = await Appointments.find({p_id: res.user._id})
       res.json(appointments)
    }catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }
})


//Creating one
router.post("/" , async (req, res) => {
    let token =  jwt_decode(req.headers.token, {headers: true});
    console.log("Decoded token :", token.userid);
    console.log("Request data :",req)
    const appointment = new Appointments({
        p_id: token.userid,
        d_id: req.body.d_id,
        start: req.body.start,
        end: req.body.start,
        title: req.body.title,
        event: req.body.event
    })
    console.log(req);
    try{
        const newAppointment = await appointment.save(function(err){
            if(err){
                 console.log(err);
                 return;
            }
            console.log("Appointment Created Successfully");
            res.status(201).json(newAppointment)
      });
    }catch(err){
        res.status(400).json({message: err.message})
    }
})


//Deleting one
router.delete("/:id", async (req, res) => {
    try{
        await res.doctor.remove()
        res.json({message: 'Deleted Appointment'})
    }catch(err){
        return res.status(500).json({message: err.message})
    }
})



async function getUser(req, res, next){
    let doctor;
    try{
        doctor = await User.findById(req.params.id)
        if(doctor == null){
            return res.status(404).json({message: 'Cannot Find User'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.doctor = doctor;
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