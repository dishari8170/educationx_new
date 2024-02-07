import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        name: {
            type: String,
        },

        id: {
            type: String,
        },
        sid: {

            type: String,
        },

        course: {
            type: String,
        },
        grade: {
            type: String,
            default :"-"
        },
        ans: {
            type: String,
        },
        file: {
            type: String,
        },
email: {
            type: String,
        },
phone: {
            type: String,
        },


    }
)

module.exports = mongoose.models.AssR || mongoose.model("AssR", FacultyDBSchema);

