
import facDB from "@/models/facDB"
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":


            const user = await facDB.find({});


            res.status(200).json(user);
            break;

        case "DELETE":

            const userx = await facDB.deleteOne({_id:req.query.id})

            res.status(200).json(userx);

            break;

        case "POST":

            try {
                const user = await facDB.create(req.body);

                if (user) {
                    res.status(200).json(user);
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