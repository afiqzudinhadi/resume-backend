import { default as mongoose, Schema } from "mongoose";

/*
Social Contact Schema
- name: name of the social contact e.g. email, phone, github, etc.
- value: value of the social contact e.g. email address, phone number, github username, etc.
- icon: icon name for the social contact
*/

const socialSchema = new Schema({
	name: { type: String, required: true },
	value: { type: String, required: true },
	icon: { type: String, required: true },
});

export default mongoose.model("Social", socialSchema);
