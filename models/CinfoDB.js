import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        title: {
            type: String,

        },
        data: {
            type: String,

        },
        course: {
            type: String,

        },

        ll:{
            type:String
        }


    }
)

module.exports = mongoose.models.CinfoDB || mongoose.model("CinfoDB", FacultyDBSchema);
