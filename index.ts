import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import apiRouter from "./routes/api";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

mongoose
	.connect(process.env.MONGO_URI || "")
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((err) => {
		console.error(err);
	});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
