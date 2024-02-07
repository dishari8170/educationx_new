import grpDB from "@/models/grpDB"
import Users from "@/models/Users"
import dbConnect from "@/lib/dbConnect";
import nodemailer from "nodemailer";


function generateRandomString(length = 5) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

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

    dbConnect()






    if (req.body.q){

        //const ry= await Users.updateMany({ _id: { $in: req.body.user } },{group:req.body.grp})

        const ry= await grpDB.updateOne({name:req.body.grp}, { $addToSet: { q: req.body.q } }, { upsert: true });
        res.status(200).json(ry);
        return
    }




    if (req.body.user){






        const  uk= await Users.find({_id:{ $in: req.body.user }});

let op=[];


let pas=generateRandomString(5)

uk.forEach(rt=>{


    emai(rt.email,"Classroom Assigned For Out Of The Box...!",`You have Successfully Registered With Out Side The Box. Here is your Password to Login to Your Student Dashboard <br/><b> Password: ${pas} </b> <br/><br/> Thank You!`)

})






      const ry= await Users.updateMany({ _id: { $in: req.body.user } },{group:req.body.grp , password:pas})

        res.status(200).json(ry);
      return
    }


    if (req.body.name) {

        const grpx = await grpDB.create( {name:req.body.name})


        res.status(200).json(grpx);



    } else {


        if (req.query.g) {


            const user = await Users.find({group: req.query.g})

            res.status(200).json(user);

            return;


        }


        const user = await grpDB.find({})

        res.status(200).json(user);




    }

}