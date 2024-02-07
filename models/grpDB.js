import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        name: {
            type: String,

        },
        q: {
            type: [String],

        },



    }
)

module.exports = mongoose.models.grpDB || mongoose.model("grpDB", FacultyDBSchema);
