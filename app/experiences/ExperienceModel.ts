import { default as mongoose, Schema } from "mongoose";

/*
Experience Schema
- title: title of the job
- year_start: year of starting the job
- year_end: year of ending the job
- company_name: name of the company
- city: city of the company
- country: country of the company
- technical_scope: technical scope of the job
- description: description of the job
- employed_status: status of employment
- freelance_status: status of freelancing
- hide_status: status of hiding the job on frontend
- minimize_status: status of minimizing the job on frontend
- remote_status_id: ObjectId of the remote_status document
*/

const experienceSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	year_start: {
		type: Date,
		required: true,
	},
	year_end: {
		type: Date,
		required: true,
	},
	company_name: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	country: {
		type: String,
		required: true,
	},
	technical_scope: String,
	description: {
		type: String,
		required: true,
	},
	employed_status: {
		type: Boolean,
		required: true,
		default: false,
	},
	freelance_status: {
		type: Boolean,
		required: true,
		default: false,
	},
	hide_status: {
		type: Boolean,
		required: true,
		default: false,
	},
	minimize_status: {
		type: Boolean,
		required: true,
		default: false,
	},
	remote_status: {
		type: Boolean,
		required: true,
		default: false,
	},
});

export default mongoose.model("Experience", experienceSchema);
