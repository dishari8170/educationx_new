import mongoose from "mongoose";
const homesliderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email:{
            type:String
        },
        id: {
            type: String,
        },
        pass: {
            type: String,
        },

        dp: {
            type: String,
        },
    }

);

module.exports = mongoose.models.SalesBD || mongoose.model("SalesBD", homesliderSchema);
