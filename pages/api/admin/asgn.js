import dbConnect from "@/lib/dbConnect";
import AsgnDB from "@/models/AsgnDB"

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":


            const user = req.query.id? await AsgnDB.find({course:req.query.id} ):await AsgnDB.find({});


            res.status(200).json(user);
            break;

        case "DELETE":

            const userx = await AsgnDB.deleteOne({_id:req.query.id})

            res.status(200).json(userx);

            break;

        case "POST":

            try {

                const user = await AsgnDB.create({
                    title: req.body.title,
                    data: req.body.data,
                    course: req.body.course,

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