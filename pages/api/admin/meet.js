import axios from "axios";
import MeetDB from "@/models/MeetDB";
import dbConnect from "@/lib/dbConnect";



export default async function handler(req, res) {



await dbConnect()


    if (req.method==="GET"){

        const user = req.query.group ? await MeetDB.find( {group:req.query.group} ):await MeetDB.find({});
        return res.status(200).json(user)

    }else {



        let access_token = (await axios.post("https://zoom.us/oauth/token?grant_type=account_credentials&account_id=elwoykshRr6nCzMVv2WiVQ", null, {

            headers: {
                'Authorization': 'Basic ' + Buffer.from("HhzN2OReTT2JnLdlOTjVw:s262T65pUW2NbWZUoL2nnwYOFCPIUzwS").toString('base64')
            }
        })).data.access_token


        let x = {
            "topic": req.body.sub,

            "type": "2",

            "start_time": req.body.time,
            "duration": req.body.duration,

            "settings": {
                "waiting_room": true,
                "host_video": "true",
                "participant_video": "true", "join_before_host": "true",
                "mute_upon_entry": "true",
                "breakout room": {
                    "enable": true
                }
            }
        }

        const rt = (await axios.post("https://api.zoom.us/v2/users/me/meetings", x, {
            headers: {
                'Authorization': 'Bearer ' + access_token
            }
        })).data


        try {
            const rtxc = await MeetDB.create({
                sub: req.body.sub,
                time: req.body.time,
                group: req.body.group,
                duration: req.body.duration,
                alink: rt.start_url,
                slink: rt.join_url,


            })
            return res.status(200).json(rtxc)
        }catch (e) {

            return res.status(200).json(e)
        }


        return res.status(200).json(rtxc)

    }











}