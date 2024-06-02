import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First Name is required !"]
    },
    middleName: String,
    lastName: {
        type: String,
        required: [true, "Last Name is required !"]
    },
    email: {
        type: String,
        required: [true, "Email is required and should be unique !"],
        unique: [true, "Email Id should be unique !"]
    },
    password: {
        type: String,
        required: [true, "Password is required !"]
    },
    // isAdmin: {
    //     type: Boolean,
    //     default: false
    // },
    // isVerified: {
    //     type: Boolean,
    //     default: false
    // },
    // forgotPasswordToken: String,
    // forgotPasswordTokenExpiry: Date,
    // verifyToken: String,
    // verifyTokenExpiry: Date,
}, {timestamps: true});



const User = mongoose.models.users || mongoose.model("Users", userSchema);

export default User ;