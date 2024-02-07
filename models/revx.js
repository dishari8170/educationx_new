import mongoose from "mongoose";
const homesliderSchema = new mongoose.Schema(
    {

        name: {
            type: String,
        },
        email:{
            type: String
        },
        rev: {
            type: String,
        },

        star: {
            type: Number,
            default: 0
        },



        id:{
            type:String
        },
        course:{
            type:String
        },
        accept: {
            type: Boolean,
            default:false
        },




    }

);

module.exports = mongoose.models.revx || mongoose.model("revx", homesliderSchema);
