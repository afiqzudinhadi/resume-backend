import { default as mongoose, Schema } from "mongoose";

/*
Education Schema
- course_name: name of the course
- year_start: year of starting the course
- year_end: year of ending the course
- university_name: name of the university
- country: country of the university
*/

const educationSchema = new Schema({
	course_name: String,
	year_start: String,
	year_end: String,
	university_name: String,
	country: String,
});

export default mongoose.model("Education", educationSchema);
