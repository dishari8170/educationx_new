import dbConnect from "@/lib/dbConnect";

import DishDB from "@/models/disDB"

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":


            const user = req.query.id? await DishDB.find({course:req.query.id} ):await DishDB.find({});


            res.status(200).json(user);
            break;

        case "DELETE":

            const userx = await DishDB.deleteOne({_id:req.query.id})

            res.status(200).json(userx);

            break;

        case "POST":

            try {

                const user = await DishDB.create({
                    msg: req.body.title,
                    name: req.body.data,
                    role: req.body.course,
                    id:req.body.id,

                });

                if (user) {
                    res.status(200).json({
                        success: true,
                        message: "Added Successfully ",

                    });
                    return;
                }else {

                    res.status(200).json({
                        success: false,
                        message:"kindly check you input data"
                    })
                }




            } catch (error) {
                res.status(200).json({ success: false, data: error });
            }
            break;


    }

}