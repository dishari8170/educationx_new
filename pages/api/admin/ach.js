
import achDB from "@/models/achDB"
import dbConnect from "@/lib/dbConnect";
import cms from "@/models/cms";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":


            const userxx = await achDB.find();
            res.status(200).json(userxx);

            break;

        case "DELETE":

            const userx = await achDB.deleteOne({_id:req.query.id})

            res.status(200).json(userx);

            break;

        case "POST":

            const user = await achDB.create(req.body);
            // const user = await achDB.updateOne({_id:req.body._id},req.body,{upsert:true});

            res.status(200).json(user);
            break;


    }

}