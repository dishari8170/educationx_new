import mongoose from "mongoose";

const FacultyDBSchema = new mongoose.Schema(
    {


        name: {
            type: String,
        },
        price: {
            type: String,
        },
        thumb: {
            type: String,

        },
        bnr: {
            type: String,

        },
        dis: {
            type: String,

        },
        vdo: {
            type: String,

        },
        star: {
            type: String,

        },
    }
,
{
    timestamps:true
}
)

module.exports = mongoose.models.StoreDB || mongoose.model("StoreDB", FacultyDBSchema);
