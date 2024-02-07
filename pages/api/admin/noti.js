

import dbConnect from "@/lib/dbConnect";
import Cmatrial from "@/models/Users"
import nodemailer from "nodemailer";




async function emai(email, sub,textx) {


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
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":

            const user = await Cmatrial.find({})
            res.status(200).json(user);
            break;

        case "POST":

            try {


                if (req.body.gx){


                    await emai(req.body.gx,req.body.sub,req.body.body)


                    res.status(200).json({
                        success: true,
                        message:"Notification Send"
                    })



                }




               await emai(req.body.email,req.body.sub,req.body.body)
                    res.status(200).json({
                        success: true,
                        message:"Notification Send"
                    })



            } catch (error) {
                res.status(200).json({ success: false, data: error });
            }
            break;


    }

}