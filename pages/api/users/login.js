import dbConnect from "@/lib/dbConnect";
import Users from "@/models/Users"

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "POST":
            try {

                const user = await Users.findOne({

                    email: req.body.email,
                    password: req.body.password
                })

                if (!user)

                {

                    res.status(200).json({
                        success: false,
                        message:"Password/Email Mismatch"
                    })
                    return;

                }

                if (user) {
                    res.status(200).json({
                        success: true,
                        user:user,
                        message: "Logged Successfully ",

                    });
                    return;
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
