
import blogDB from "@/models/blogDB"
import dbConnect from "@/lib/dbConnect";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":


            if (req.query.id){
                const user = await blogDB.findOne({_id:req.query.id},);
                res.status(200).json(user);
            }else {
                const user = await blogDB.find({},{sub:1,dp:1,title:1});
                res.status(200).json(user);
            }

            break;

        case "DELETE":

            const userx = await blogDB.deleteOne({_id:req.query.id})

            res.status(200).json(userx);

            break;

        case "POST":

            const user = await blogDB.create(req.body);

            res.status(200).json(user);
            break;


    }

}