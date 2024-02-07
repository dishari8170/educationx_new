import dbConnect from "@/lib/dbConnect";
import {host} from "@/models/rx";


export default async function handler(req, res) {


    await dbConnect();


   // const t=await rx.create({x:"raju"})
   const t=await host.deleteMany({
       status
           :"Pending"})

    res.status(200).json(t)



}