import Users from "@/models/Users"
import dbConnect from "@/lib/dbConnect";

export default async (req, res) => {


    await dbConnect()

    if (req.query.id) {


        const t = await Users.findOneAndUpdate({_id:req.query.id}, {$set:  req.body  } , { new: true })


        res.status(200).json(t)


    } else {

        res.status(200).json("sorry")
    }


}