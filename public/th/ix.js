const nodemailer = require('nodemailer');

// Create a transporter object using the Gmail SMTP server
// const transporter = nodemailer.createTransport({
//
//   host: 'smtp-relay.gmail.com',
//   port: 465, // Use 465 for SSL or 587 for TLS
//   secure: true, // Use SSL/TLS
//
//   auth: {
//     // user: "hotelmotelclubofficial@gmail.com",
//     // pass: "qfzrlhjvbmpkelyf",
//     user: 'contact@outsidetheboxbook.com', // Your custom domain email address
//     pass: 'qcmb djni ezwq nizm', // Your email password or application-specific password
//   },
// });


//
// var transporter = nodemailer.createTransport(({
//   service: 'gmail',
//   host: 'smtpout.secureserver.net',
//   auth: {
//     user: 'admin@hotelmotelclub.com',
//     pass: 'qcmbdjniezwqnizm'
//   }
// }));

const transporter = nodemailer.createTransport({
  host: 'smtpout.secureserver.net',
  port: 465,
  secure: true,
  auth: {
    user: 'no-reply@atsdhst.com',
    pass: 'aA@1234567890'
  }
});


const mailOptions = {
  from: 'no-reply@atsdhst.com',
  to: 'rajuhaldarx@gmail.com',
  subject: 'Subject of the email',
  text: 'Text content of the email',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error: ' + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

