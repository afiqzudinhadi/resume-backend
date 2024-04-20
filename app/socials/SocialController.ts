import { Request, Response } from "express";
import SocialModel from "./SocialModel";

// @route   GET /api/socials/
// @desc	Get all details
// @access	Public
export const getSocials = async (req: Request, res: Response) => {
	try {
		const socials = await SocialModel.find();
		console.log("🚀 ~ getSocials ~ socials:", socials);
		return res.status(200).json(socials);
	} catch (error) {
		console.log("🚀 ~ getSocialContacts ~ error:", error);
		throw new Error("Error while fetching socials " + error);
	}
};
