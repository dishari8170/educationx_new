
import bnrDB from "@/models/bnrDB"
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":


            const userxx = await bnrDB.find();
            res.status(200).json(userxx);

            break;

        case "DELETE":

            const userx = await bnrDB.deleteOne({_id:req.query.id})

            res.status(200).json(userx);

            break;

        case "POST":

            const user = await bnrDB.create(req.body);

            res.status(200).json(user);
            break;


    }

}