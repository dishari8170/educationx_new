import dbConnect from "@/lib/dbConnect";
import revx from "@/models/revx";

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":

            let user= {};
            if (req.query.id){
                user["user"] = await revx.find({id:req.query.id},{name:1,rev:1,star:1})

                user["stat"] = await revx.aggregate([

                    { $match: { id: req.query.id } },

                    {
                        $group: {
                            _id: null,
                            total: { $sum: 1 },
                            avg: { $avg: "$star" }
                        }
                    }
                ]);



            }else{
                user = await revx.find({})


            }


            res.status(200).json(user);
            break;

        case "DELETE":

            const userx = await revx.deleteOne({_id:req.query.id})


            res.status(200).json(userx);

            break;

        case "POST":

            try {

                if (req.query.id){

                    const userx = await revx.updateOne({_id:req.query._id},{
                        accept:true,
                    });

                    if (userx) {
                        res.status(200).json({
                            success: true,
                            message: "Updated Successfully ",

                        });
                        return;
                    }else {

                        res.status(200).json({
                            success: false,
                            message:"kindly check you input data"
                        })

                        return;
                    }

                    break;
                } else {

                    const user = await revx.create({
                        name: req.body.name,
                        email:req.body.email,
                        star:req.body.star,
                        id:req.body.id,
                        accept:false,
                        rev:req.body.rev,
                        course:req.body.course


                    });

                    if (user) {
                        res.status(200).json({
                            success: true,
                            message: "Added Successfully ",
                            user:user

                        });
                        return;


                    } else {

                        res.status(200).json({
                            success: false,
                            message: "kindly check you input data"
                        })
                    }

                }

            } catch (error) {
                res.status(200).json({ success: false, data: error });
            }
            break;


    }

}