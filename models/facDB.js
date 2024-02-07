import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        name: {
            type: String,

        },

        position: {
            type: String,

        },


        dp: {
            type: String,

        },


        grp: {
            type: String,

        },


    }
)

module.exports = mongoose.models.facDB || mongoose.model("facDB", FacultyDBSchema);
