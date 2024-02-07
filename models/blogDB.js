import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        text: {
            type: String,

        },

        sub: {
            type: String,

        },
        title: {
            type: String,

        },


        dp: {
            type: String,

        },






    }
)

module.exports = mongoose.models.blogDB || mongoose.model("blogDB", FacultyDBSchema);
