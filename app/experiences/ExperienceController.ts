import { Request, Response } from "express";
import ExperienceModel from "./ExperienceModel";

// @route   GET /api/experiences/
// @desc	Get all experiences
// @access	Public
export const getExperiences = async (req: Request, res: Response) => {
	try {
		const experiences = await ExperienceModel.find();
		return res.status(200).json(experiences);
	} catch (error) {
		console.log("🚀 ~ getExperiences ~ error:", error);
		throw new Error("Error while fetching experiences " + error);
	}
};
