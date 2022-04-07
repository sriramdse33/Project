// 1. Import dependencies
const express = require("express");
const router = express.Router();
const jwt_decode = require('jwt-decode')

const User = require('../../models/user');

router.get('/:token', (req, res) => {
    console.log("GOT REQ FOR RESET :", req.params.token)
      User.findOne({
        resetPasswordToken: req.params.token
      }).then((user) => {
        if (user == null) {
          console.error('password reset link is invalid or has expired');
          res.status(403).send('password reset link is invalid or has expired');
        } else {
            console.log("User found :", user)
          res.status(200).send({
            username: user.email,
            message: 'password reset link a-ok',
          });
        }
      });
    });
  

    module.exports = router