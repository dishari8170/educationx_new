import dbConnect from "@/lib/dbConnect";
import Users from "@/models/Users"
import nodemailer from "nodemailer";


  async function emai(email, sub,textx) {

    if (email=="1"){
        email="adminx@mailnesia.com"
    }
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hotelmotelclubofficial@gmail.com",
            pass: "qfzrlhjvbmpkelyf",
        },
    });

    transporter
        .sendMail({
            from: "hotelmotelclubofficial@gmail.com",
            to: email,
            subject: sub,
            html: textx,

        })
        .catch((error) => {
            console.log(error);
        });
}


export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "POST":
            try {

                // if (await Users.findOne({
                //     email: req.body.email
                // }).exec()
                //
                // ){
                //
                //     res.status(200).json({
                //         success: false,
                //         message:"Account Already exists"
                //     })
                //     return;
                //
                // }

                const user = await Users.create({
                    email: req.body.email,
                    role: req.body.role,
                    // password: "1234567890",
                    name: req.body.name,
                    sex: req.body.sex,
                    age: req.body.age,
                    phone: req.body.phone,
                    addr: req.body.addr,

                });



                if (user) {





let tp=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New User Registration</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        h2 {
            color: #007BFF;
        }

        p {
            margin-bottom: 15px;
        }

        strong {
            color: #007BFF;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .footer {
            margin-top: 20px;
            color: #555;
        }
    </style>
</head>
<body>

<div class="container">
    <h2>New User Registration Happened</h2>
<br/>


    <p><strong>Course Name:</strong> ${req.body.role}</p>
    <p><strong>Email:</strong> ${req.body.email}</p>
    <p><strong>Name:</strong> ${req.body.name} </p>
    <p><strong>Sex:</strong> ${req.body.sex} </p>
    <p><strong>Age:</strong> ${req.body.age}</p>
    <p><strong>Phone:</strong> ${req.body.phone}</p>
    <p><strong>Address:</strong> ${req.body.addr}</p>
    <p><strong>Parches Information:</strong></p> <pre>${JSON.stringify( JSON.parse(req.body.payment) )}</pre> 

    <p>Please review the details above and take any necessary actions.</p>

    <div class="footer">
        <p>Best regards,<br>
            Your Company/Admin Name</p>
    </div>
</div>

</body>
</html>
`;


await emai("1","New Registration Happened",tp);



                 return    res.status(200).json({
                            success: true,
                        user:user,
                            message: "Registration Successfully ",

                        });




                    }else {

                    res.status(200).json({
                        success: false,
                        message:"kindly check you registration data"
                })
                }




            } catch (error) {
                res.status(200).json({ success: false, data: [], message: "There is Some Problem Wait"+error, token: "", refreshtoken: "" });
            }
            break;
        default:
            res.status(200).json({ success: false, data: [], message: "something went wrong", token: "", refreshtoken: "" });
            break;


    }
}
