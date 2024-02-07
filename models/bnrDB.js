import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        dp: {

            type: String,

        }


    }
)

module.exports = mongoose.models.bnrDB || mongoose.model("bnrDB", FacultyDBSchema);
