import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        q: {
            type: String,
        },
        u: {
            type: String,
        },
        a: {
            type: [String],

        },
        x:{
            type: [String],
            default:["X","X"]
        },
        m:{
            type:String,
            default: "100"
        }


    }
)

module.exports = mongoose.models.Qres || mongoose.model("Qres", FacultyDBSchema);
