import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        q: {
            type: String,
        },
        t: {
            type: Boolean,
        },
        option: {
            type: [String],
        },
        group: {
            type: String,

        },


    }
)

module.exports = mongoose.models.QuizDB || mongoose.model("QuizDB", FacultyDBSchema);
