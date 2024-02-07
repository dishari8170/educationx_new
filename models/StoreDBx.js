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

        }, vdo: {
            type: String,

        },
    }
,
{
    timestamps:true
}
)

module.exports = mongoose.models.StoreDBx || mongoose.model("StoreDBx", FacultyDBSchema);
