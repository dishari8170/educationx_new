import dbConnect from "@/lib/dbConnect";
import fac from "@/models/FacultyDB";


export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "POST":
            try {
                const user = await fac.create({

                    name: req.body.name,
                    position: req.body.position,
                    dp:req.body.dp
                });

                if (user) {
                    res.status(200).json({
                        success: true,
                        message: "Added Successfully ",

                    });
                    return;
                }else {
                    res.status(200).json({
                        success: false,
                        message:"kindly check you input data"
                    })
                }


            } catch (error) {
                res.status(200).json({ success: false, data: [], message: "There is Some Problem Wait", token: "", refreshtoken: "" });
            }
            break;
        default:
            res.status(200).json({ success: false, data: [], message: "something went wrong", token: "", refreshtoken: "" });
            break;


    }
}
