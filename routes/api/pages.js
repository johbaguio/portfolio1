const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");

const nodemailer = require('nodemailer');
require('dotenv').config();

////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////   Public Access Routes for Pages /////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

/**
 * @version 1.0.0
 * @route POST api/pages/contact-us
 * @description Post a message by a general user
 * @access Public
 */

router.post(
  '/subscribe',
  [
    check('email', 'Please include a valid email')
      .isEmail()
      .not()
      .isEmpty(),
    check('name', 'Your name is required')
      .not()
      .isEmpty(),
    check('message', 'Your message is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const output = `
    <p>You have a new subscriber!</p>
    <h3>Subscriber's details: </h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <p> Message: ${req.body.message} </p>
    </ul>
  `;

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PASS
        }
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: '"Johanna Baguio" <johbaguio@gmail.com>', // sender address
        to: process.env.ADMIN_EMAIL, // list of receivers
        //   cc: '',
        //   bcc: '',
        subject: 'New website connection message', // Subject line
        text: 'You have a message from your website:', // plain text body
        html: output // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error.response);
        }
        res.json({ msg: 'You have successfully subscribed to our website!' });
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
