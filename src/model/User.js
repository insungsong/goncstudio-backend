import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    jobCategory: String,
    email: String,
    password: String,
    companyName: String,
    monetaryUnit: String,
    establishment: String
})

const model = mongoose.model("User", UserSchema);

export default model;  