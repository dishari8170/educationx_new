import dbConnect from "@/lib/dbConnect";

import DishDB from "@/models/AssRDB"

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":

let fin={};

            if(req.query.id){
                fin.id=req.query.id
            }

            if(req.query.gid){
            fin._id=req.query.gid
        }
            if(req.query.sid){
                fin.sid=req.query.sid
            }
            if(req.query.course){
            fin.course=req.query.course
        }

            const user = await DishDB.find(fin);


            res.status(200).json(user);
            break;

        case "DELETE":

            const userx = await DishDB.deleteOne({_id:req.query.id})

            res.status(200).json(userx);

            break;

        case "POST":

            try {


                if (req.body.idx) {

                    // var myquery = { address: "Valley 345" };
                    // var newvalues = { $set: { address: "Canyon 123" } };
                    // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
                    // }
                    // }


                    const user = await DishDB.updateOne({_id: req.body.idx}, {$set: {grade: req.body.grade}})

                    if (user) {

                        res.status(200).json({
                            success: true,
                            message: "Added Successfully ",
                            u: user

                        });

                    } else {

                        res.status(200).json({
                            success: false,
                            message: "There is Some Issue ",
                            u: user

                        });
                    }


                } else {


                    const user = await DishDB.create({
                        name: req.body.name,
                        course: req.body.course,
                        id: req.body.id,
                        sid: req.body.id,
                        ans: req.body.ans,
                        file: req.body.file,
                        email: req.body.email,
                        phone: req.body.phone,


                    });

                    if (user) {
                        res.status(200).json({
                            success: true,
                            message: "Added Successfully ",
                            u: user

                        });
                        return;
                    } else {

                        res.status(200).json({
                            success: false,
                            message: "kindly check you input data"
                        })
                    }


                }
            }
            catch
                (error)
                {
                    res.status(200).json({success: false, data: error});
                }
                break;



    }

}