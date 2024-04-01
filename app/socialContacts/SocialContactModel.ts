import { default as mongoose, Schema } from "mongoose";

/*
Social Contact Schema
- email: email of the user
- linkedin: linkedin of the user
- github: github of the user
- twitter: twitter of the user
- number: phone number of the user including country code
*/

const socialContactSchema = new Schema({
	email: String,
	linkedin: String,
	github: String,
	twitter: String,
	number: String,
});

export default mongoose.model("Social_contact", socialContactSchema);
