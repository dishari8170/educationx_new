import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        title: {
            type: String,

        },
        data: {
            type: String,

        }, course: {
            type: String,

        },


    }
)

module.exports = mongoose.models.AsgnDB || mongoose.model("AsgnDB", FacultyDBSchema);
