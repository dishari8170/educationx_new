import axios from "axios";
import {zoom} from "@/lib/Rh";

export default async function handler(req, res) {
//
// const data = {
//   grant_type: "client_credentials",
//   client_id: zoom.client_id ,
//   client_secret: zoom.client_secret
// }

 let data = {
    grant_type: "client_credentials",
    client_id: "nOi8JiPR92DltwEgfaaYg",
    client_secret: "0MEMbuLum1StDPMtMLgzyBKSPeibOGTO"
  }
  await axios.post("https://zoom.us/oauth/token",null,{
    params:data
  }).then(r => {

    res.status(200).json(r.data)

  },x=>{
    res.status(200).json(x)

  })


}
