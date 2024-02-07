import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        title: {
            type: String,

        },
        link: {
            type: String,

        },  course: {
            type: String,

        },


    }
)

module.exports = mongoose.models.Cmatrial || mongoose.model("Cmatrial", FacultyDBSchema);
