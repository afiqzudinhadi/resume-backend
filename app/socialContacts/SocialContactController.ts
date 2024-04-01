import { Request, Response } from "express";
import SocialContactModel from "./SocialContactModel";

// @route   GET /api/social_contacts/
// @desc	Get all details
// @access	Public
export const getSocialContacts = async (req: Request, res: Response) => {
	try {
		const socials = await SocialContactModel.find();
		return res.status(200).json(socials);
	} catch (error) {
		console.log("🚀 ~ getSocialContacts ~ error:", error);
		throw new Error("Error while fetching socials " + error);
	}
};
