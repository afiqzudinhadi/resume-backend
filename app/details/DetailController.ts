import { Request, Response } from "express";
import DetailModel from "./DetailModel";

// @route   GET /api/details/
// @desc	Get all details
// @access	Public
export const getDetails = async (req: Request, res: Response) => {
	try {
		const details = await DetailModel.find();
		return res.status(200).json(details);
	} catch (error) {
		console.log("🚀 ~ getDetails ~ error:", error);
		throw new Error("Error while fetching details " + error);
	}
};
