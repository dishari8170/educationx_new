import mongoose from "mongoose";
const homesliderSchema = new mongoose.Schema(
    {

        name: {
            type: String,
        },

        about: {
            type: String,
        },




    }

);

module.exports = mongoose.models.cms || mongoose.model("cms", homesliderSchema);
