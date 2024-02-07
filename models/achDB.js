import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        dp: {

            type: String,

        },

        text: {

            type: String,

        }


    }
)

module.exports = mongoose.models.achDB || mongoose.model("achDB", FacultyDBSchema);
