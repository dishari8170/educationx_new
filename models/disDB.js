import mongoose from "mongoose";
const cinfo = new mongoose.Schema(
    {


        basic: {
            type: String,
        },

        sly: {
            type: String,

        },



    }


    ,
    {
        timestamps: true,
    })


//{ name:Math.random()>0.5?"Abcd Efgh":"Ijkl Monp", role: "Student", msg: td.value,mera:Math.random()>0.5}
module.exports = mongoose.model("DisDB", cinfo);

