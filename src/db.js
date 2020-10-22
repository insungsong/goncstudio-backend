import mongoose from "mongoose";
import dotenv from "dotenv";

//.env에 접근하기 위해 사용
dotenv.config();


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

const handleOpenDB = () => {
    console.log(`✅ connect to DB`);
}

const handleError = (error) => {
    console.log(`😢Error on DB Connection:${error}`)
}


db.once("open", handleOpenDB)
db.on("error", handleError)

