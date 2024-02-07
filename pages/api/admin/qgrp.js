


import QgrpDB from "@/models/QgrpDB"
import grpDB from "@/models/grpDB"
import QuizDB from "@/models/QuizDB"
import Qres from "@/models/Qres"

import dbConnect from "@/lib/dbConnect";


    export default async function handler(req, res) {

        dbConnect()


        if (req.query.id) {


                const rtxxt= await QgrpDB.find({id: req.query.g})

            const rtxxty= await Qres.find({u: req.query.id})


            let tp={};
            tp.data=rtxxt
            tp.x=rtxxty


          return  res.status(200).json(rtxxty);

        }


        if (req.query.g) {


            const rtx= await grpDB.find({name: req.query.g})



            const rtxx= await QuizDB.find({group: req.query.g})



            res.status(200).json(rtxx);

        }else if (req.query.h) {


            const rtx= await grpDB.find({name: req.query.h})



            // const rtxx= await QuizDB.find({group:{ $in: rtx[0].q }} )



            res.status(200).json(rtx[0].q);

        }



        else  if (req.query.delete) {


            await QuizDB.deleteMany({group: req.query.delete})
            await QgrpDB.deleteOne({name: req.query.delete})

            res.status(200).json("done");


        }else if (req.query.name){
            const grpx = await QgrpDB.create({name:req.query.name})


            res.status(200).json(grpx);


        } else {


            const user = await QgrpDB.find({})

            res.status(200).json(user);




        }




}