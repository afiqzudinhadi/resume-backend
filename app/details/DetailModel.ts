import { default as mongoose, Schema } from "mongoose";

/*
Detail Schema
- first_name: first name of the user
- last_name: last name of the user
- address: address of the user
- social_contact_id: ObjectId of the social_contact document
- experience_id: ObjectId of the experience document
- education_id: ObjectId of the education document
*/

const detailSchema = new Schema({
	first_name: String,
	last_name: String,
	address: String,
	socials: [
		{
			type: Schema.Types.ObjectId,
			ref: "Social",
		},
	],
	education_id: {
		type: Schema.Types.ObjectId,
		ref: "Education",
	},
	experiences: [
		{
			type: Schema.Types.ObjectId,
			ref: "Experience",
		},
	],
});

export default mongoose.model("Detail", detailSchema);
