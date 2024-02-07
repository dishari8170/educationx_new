import dbConnect from "@/lib/dbConnect";
import Qres from "@/models/Qres";


export default async function handler(req, res) {


    await dbConnect()



        // const user = req.query.group ? await MeetDB.find({group: req.query.group}) : await MeetDB.find({});



    if (req.query.idx){

        const rpx = await Qres.updateOne({_id:req.query.idx},{$set:{x:req.body.x}})

        return  res.status(200).json(rpx);

    }

    if (req.query.id){
let rpx;
        if (req.query.g){

            rpx = await Qres.find({u:req.query.id,q:req.query.g})

        }
        else {

             rpx = await Qres.find({u:req.query.id})

        }


        return  res.status(200).json(rpx);

    }



    const rp = await Qres.create(
        {
        q:req.body.q,
        u:req.body.u,
        a:req.body.a
    }

    )

        return res.status(200).json(rp)





}