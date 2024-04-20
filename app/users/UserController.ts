import { Request, Response } from "express";
import UserModel from "./UserModel";

// @route   GET /api/users/
// @desc	Get all users
// @access	Public
export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await UserModel.find();
		return res.status(200).json(users);
	} catch (error) {
		console.log("🚀 ~ getUsers ~ error:", error);
		throw new Error("Error while fetching users " + error);
	}
};

// @route   GET /api/user/:user_id
// @desc	Get user details
// @access	Public
export const getUserDetails = async (req: Request, res: Response) => {
	try {
		const user = await UserModel.findById(req.params.user_id)
			.populate({
				path: "detail_id",
				populate: [
					{
						path: "socials",
						model: "Social",
					},
					{
						path: "education_id",
						model: "Education",
					},
					{
						path: "experiences",
						model: "Experience",
					},
				],
			})
			.exec();
		return res.status(200).json(user);
	} catch (error) {
		console.log("🚀 ~ getUserDetails ~ error:", error);
		throw new Error("Error while fetching user details " + error);
	}
};
