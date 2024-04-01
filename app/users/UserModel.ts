import { default as mongoose, Schema } from "mongoose";

/*
User Schema
- username: username of the user
- detail_id: ObjectId of the detail document
*/

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	detail_id: {
		type: Schema.Types.ObjectId,
		ref: "Detail",
	},
});

export default mongoose.model("User", userSchema);
