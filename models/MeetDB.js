import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        sub: {
            type: String,
        },
        time: {
            type: String,
        },
        duration: {
            type: String,
        },
        alink:{
            type: String,
        },
         slink:{

             type: String,

        },

        group: {
            type: String,

        },


    }
)

module.exports = mongoose.models.MeetDB || mongoose.model("MeetDB", FacultyDBSchema);
