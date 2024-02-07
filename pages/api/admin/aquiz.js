import dbConnect from "@/lib/dbConnect";
import QuizDB from "@/models/QuizDB"

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":


            const user = req.query.id? await QuizDB.find({group:req.query.id} ):await QuizDB.find({});


            res.status(200).json(user);
            break;

        case "DELETE":

            const userx = await QuizDB.deleteOne({_id:req.query.id})

            res.status(200).json(userx);

            break;

        case "POST":

            try {
                const user = await QuizDB.create({
                    t: req.body.t,
                    q: req.body.q,
                    option:req.body.option,
                    group: req.body.group,

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