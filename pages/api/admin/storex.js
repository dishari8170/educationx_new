import dbConnect from "@/lib/dbConnect";
import StoreDBx from "@/models/StoreDBx";
export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":

            let user=null;
            if (req.query.id){
                 user = await StoreDBx.findOne({_id:req.query.id})

            }else{
               user = await StoreDBx.find({})


            }


            res.status(200).json(user);
            break;

        case "DELETE":

            const userx = await StoreDBx.deleteOne({_id:req.query.id})


            res.status(200).json(userx);

            break;

        case "POST":

            try {

                if (req.query.id){



                    const userx = await StoreDBx.findByIdAndUpdate({_id:req.query.id},{
                        name: req.body.title,
                        price: req.body.link,
                        bnr: req.body.link,
                        dis: req.body.link,
                        thumb: req.body.link,
                        vdo: req.body.vdo,

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




                    const user = await StoreDBx.create({
                        name: req.body.name,
                        price: req.body.price,
                        bnr: req.body.bnr,
                        dis: req.body.dis,
                        thumb: req.body.thumb,
                        vdo: req.body.vdo,

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