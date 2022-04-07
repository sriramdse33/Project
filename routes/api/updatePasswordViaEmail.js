// 1. Import dependencies
const express = require("express");
const router = express.Router();
const jwt_decode = require('jwt-decode')

const User = require('../../models/user');

router.put('/', (req, res) => {
    console.log("Req body ",req.body)
      User.findOne({
          email: req.body.username,
          resetPasswordToken: req.body.resetPasswordToken
      }).then(user => {
        if (user == null) {
          console.error('password reset link is invalid or has expired');
          res.status(403).send('password reset link is invalid or has expired');
        } else if (user != null) {
          console.log('user exists in db');
          user.password = req.body.password;
          user.markModified('password');
          user.save(err => console.log(err));
          console.log('password updated');
          res.status(200).send({ message: 'password updated' });
        } else {
          console.error('no user exists in db to update');
          res.status(401).json('no user exists in db to update');
        }
      });
    });


  module.exports = router