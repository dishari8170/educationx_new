import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        title: {
            type: String,

        },
        data: {
            type: String,

        },



    }
)

module.exports = mongoose.models.faqdb || mongoose.model("faqdb", FacultyDBSchema);
