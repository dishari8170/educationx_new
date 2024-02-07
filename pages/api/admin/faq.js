import dbConnect from "@/lib/dbConnect";
import faqdb from "@/models/faqdb"

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":


            const user = req.query.id? await faqdb.find({id:req.query.id} ):await faqdb.find({});


            res.status(200).json(user);
            break;

        case "DELETE":

            const userx = await faqdb.deleteOne({_id:req.query.id})

            res.status(200).json(userx);

            break;

        case "POST":

            try {

                const user = await faqdb.create({
                    title: req.body.title,
                    data: req.body.data,


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