import { Request, Response } from "express";
import EducationModel from "./EducationModel";

// @route   GET /api/educations/
// @desc	Get all educations
// @access	Public
export const getEducations = async (req: Request, res: Response) => {
	try {
		const educations = await EducationModel.find();
		return res.status(200).json(educations);
	} catch (error) {
		console.log("🚀 ~ getEducations ~ error:", error);
		throw new Error("Error while fetching educations " + error);
	}
};
