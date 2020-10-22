import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./db";
import User from "./model/User";

const app = express();
app.use(cors());
dotenv.config();

app.post("/signUp", async (req, res) => {
    try {
        const jobCategory = req.query.jobCategory;
        const email = req.query.email;
        const password = req.query.password;
        const companyEmail = req.query.companyEmail;
        const isCurrency = req.query.isCurrency;
        const isChoiceYear = req.query.isChoiceYear;

        //user가 있는지 확인하는 것
        const isUser = await User.findOne({ email });
        if (isUser) {
            isUser.save();

            res.redirect("http://localhost:3000/SignIn");
        } else {
            const newUser = await User.create({
                jobCategory,
                email,
                password,
                companyName: companyEmail,
                monetaryUnit: isCurrency,
                establishment: isChoiceYear,
            })
            console.log(isUser);
            console.log("newUser", newUser);
            if (isUser || isUser) {
                res.redirect("http://localhost:3000/SignUpSuccess");
            } else {
                res.redirect("http://localhost:3000/SignUpFail");
            }
        }

    } catch (e) {
        console.log(e)
    }
})

app.listen(process.env.PORT, () => {
    console.log(`✅ Listening on Server: http://localhost:${process.env.PORT}`)
})