// 1. Import dependencies
const express = require("express");
const router = express.Router();
const crypto = require('crypto');
const User = require('../../models/user');

require('dotenv').config();


const nodemailer = require('nodemailer');


  router.post('/', (req, res) => {
    if (req.body.email === '') {
      res.status(400).send('email required');
    }
    console.error(req.body.email);
    User.findOne({
        email: req.body.email,
    }).then((user) => {
      if (user === null) {
        console.error('email not in database');
        res.status(403).send('email not in db');
      } else {
        const token = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = token;
        user.markModified('resetPasswordToken')
        user.save(err => console.log("ERROR SAVING TOKEN ",err));


        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'ohsfront@gmail.com',
            pass: 'Myohs@2021',
          },
        });

        const mailOptions = {
          from: 'myohs@gmail.com',
          to: `${user.email}`,
          subject: 'Link To Reset Password',
          text:
            'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
            + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
            + `http://localhost:3000/reset/${token}\n\n`
            + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
        };

        console.log('sending mail');

        transporter.sendMail(mailOptions, (err, response) => {
          if (err) {
            console.error('there was an error: ', err);
          } else {
            console.log('here is the res: ', response);
            res.status(200).json('recovery email sent');
          }
        });
      }
    });
  });


  module.exports = router
