// 1. Import dependencies
const express = require("express");
const router = express.Router();

const Doctor = require('../../models/doctor');


//Gettig all
router.get("/", async (req, res) => {
    try
    { 
       const doctors = await Doctor.find({});
       res.status(200).json(doctors)
    }catch(err){
        console.log(err);
        res.status(500).json({message: err.message});
    }

})

//Getting one
router.get("/:id", getDoctor, (req, res) => {
    res.status(200).send(res.doctor);
})


//Creating one
router.post("/" , async (req, res) => {
    const doctor = new Doctor({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    })
    console.log(req);
    try{
        const newDoctor = await doctor.save(function(err){
            if(err){
                 console.log(err);
                 return;
            }
            console.log("Doctor Created Successfully");
            res.status(201).json(newDoctor)
            res.json(newDoctor)
      });
    }catch(err){
        res.status(400).json({message: err.message})
    }
})


//Updating one
router.patch("/:id", getDoctor, async(req, res) => {
    if(req.body.name != null){
        res.doctor.name = req.body.name
    }
    if(req.body.address != null){
        res.doctor.address = req.body.address
    }
    if(req.body.qualifications != null){
        res.doctor.qualifications = req.body.qualifications
    }
    if(req.body.specialities != null){
        res.doctor.specialities = req.body.specialities
    }
    if(req.body.mobile != null){
        res.doctor.mobile = req.body.mobile
    }
    if(req.body.email != null){
        res.doctor.email = req.body.email
    }
    if(req.body.practiceStartDate != null){
        res.doctor.practiceStartDate = req.body.practiceStartDate
    }

    try{
        const updatedDoctor =  await res.doctor.save()
        console.log("Updated Doctor Successfully");
        res.status(200).json(updatedDoctor)
    }catch(err){
        res.status(400).json({ message: err.message })
    }
})

//Deleting one
router.delete("/:id", getDoctor, async (req, res) => {
    try{
        await res.doctor.remove()
        res.send(200).json({message: 'Deleted Doctor'})
    }catch(err){
        return res.status(500).json({message: err.message})
    }
})



async function getDoctor(req, res, next){
    let doctor;
    try{
        doctor = await Doctor.findById(req.params.id)
        if(doctor == null){
            return res.status(404).json({message: 'Cannot Find Doctor'})
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }

    res.doctor = doctor;
    next()
}



module.exports = router