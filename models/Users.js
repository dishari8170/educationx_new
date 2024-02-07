import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {




        name: {
            type: String,
        },
        age:{
            type:String,
        },
        sex:{
            type:String,
        },
        addr:{
            type:String,
        },
        email: {
            type: String,

        },

        phone: {
            type: String,
            default:""
        },
        dp: {
            type: String,
            default:"dp.jpg"
        },

        password: {
            type: String,
        },


        role: {
            type: String,
            default: "Student"
        },

        q: {
            type: [String],

        },

        group: {
            type: String,
            default: "Not Assign"

        },

    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.models.Users || mongoose.model("Users", UserSchema);
