import dbConnect from "@/lib/dbConnect";
import cms from "@/models/cms"

export default async function handler(req, res) {
    const {method} = req;

    await dbConnect();

    switch (method) {

        case "GET":


            const user = req.query.name? await cms.findOne({name:req.query.name} ): await cms.find({});
            if (req.query.name){

                let  u=JSON.parse(user.about)
                    res.status(200).json(u);

            }else{
                    res.status(200).json(user);
            }
            return
            break;

        case "DELETE":

            const userx = await cms.deleteOne({name:req.query.name})

            res.status(200).json(userx);

            break;

        case "POST":

            try {

                const user = await cms.updateOne({name:req.query.name},{name:req.query.name,about:req.body.about},{upsert:true});

                if (user) {
                    res.status(200).json({
                        success: true,
                        message: "Added Successfully ",
                        y:user

                    });
                    return;
                }else {

                    res.status(200).json({
                        success: false,
                        message:"kindly check you input data"
                    })
                }




            } catch (error) {
                res.status(200).json({ success: false, data: error });
            }
            break;


    }

}