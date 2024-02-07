import Users from "@/models/Users"
import SalesBD from "@/models/SalesDB"

import dbConnect from "@/lib/dbConnect";
import nodemailer from "nodemailer";




async function emai(email, sub,textx) {
    let transporter = nodemailer.createTransport(({
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: 'admin@hotelmotelclub.com',
            pass: 'qcmbdjniezwqnizm'
        }
    }));


    transporter
        .sendMail({
            from: "admin@hotelmotelclub.com",
            to: email,
            subject: sub,
            html: textx,

        })
        .catch((error) => {
            console.log(error);
        });
}
export default async function handler(req, res) {


    await dbConnect();



    if (req.query.x==="featch") {
        let u=""
        if (req.body.id==="admin"){
            u= await Users.find({},{_id:1,name:1,cname:1,username:1,phone:1,paid:1,exp:1})
        }else
        {
            u= await Users.find({eamid:req.body.id},{_id:1,name:1,cname:1,username:1,phone:1,paid:1,exp:1})
        }

        return res.status(200).json(u)
    }

    else if (req.body.ue){

        await emai(req.body.ue,req.body.sub,req.body.text)

        return res.status(200).json('sent')

    }






    // else if  (req.query.x=="payreq") {
    //
    //
    //     let t=await payDB.create(req.body)
    //
    //     return res.status(200).json(t)
    //
    // }






    // else if  (req.query.x=="payx") {
    //
    //     let u= await Users.updateOne(
    //         { "_id": req.body.p },
    //         { "$set": { "paid": req.body.q,exp:req.body.exp } }
    //     )
    //
    //     let ux= await payDB.updateOne(
    //         { "_id": req.body.lol },
    //         { "$set": { "status": "Paid" } }
    //     )
    //
    //
    //     return res.status(200).json(ux)
    // }
    // else if  (req.query.x=="pay") {
    //
    //
    //     let u=""
    //     if (req.body.id==="admin"){
    //         u= await payDB.find({})
    //     } else
    //     {
    //         u= await payDB.find({refname:req.body.id})
    //     }
    //
    //     return res.status(200).json(u)
    //
    //
    //
    // }

    else if  (req.query.x=="login"){

        let u = await SalesBD.findOne({email:req.body.email,pass:req.body.pass})
        return res.status(200).json(u)

    }


 else if  (req.query.x==="del"){

        let u = await SalesBD.deleteOne({_id:req.query.del})
        return res.status(200).json(u)

    }





    else if (req.query.x==="index") {
        let u = await SalesBD.find({})
        return res.status(200).json(u)

    }

    else if (req.query.x=="reg"){

        let u = await SalesBD.create(req.body)





        let w=`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #333333;
        }

        p {
            color: #555555;
        }

        .btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #3498db;
            color: #ffffff;
            text-decoration: none;
            border-radius: 3px;
        }
    </style>
</head>

<body>
<div class="container">
  
  <pre>
  ${JSON.stringify(u)}
  </pre>
</div>
</body>

</html>


    
    
    
    `



        await  emai(req.body.email,"Welcome to HotelMotelClub.com",w)










        return res.status(200).json(u)

    }











    else if (req.query.x==="len"){

        let fpx=req.body.id==="admin"?{}:{eamid:req.body.id}

        let u= await Users.aggregate([
            {
                $match: fpx,
            },
            {
                $group: {
                    _id: "$paid"
                    ,
                    count: { $sum: 1 },
                },
            },
        ])


        let yi=[0,0]

        for (let uKey in u) {
            yi[uKey]=u[uKey]["count"]
        }



        res.status(200).json(yi)

    }










    else {
        res.status(200).json("x")
    }

}