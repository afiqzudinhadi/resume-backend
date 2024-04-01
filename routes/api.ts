import express from "express";
import { getUsers, getUserDetails } from "../app/users/UserController";
import { getDetails } from "../app/details/DetailController";
import { getSocialContacts } from "../app/socialContacts/SocialContactController";
import { getEducations } from "../app/educations/EducationController";
import { getExperiences } from "../app/experiences/ExperienceController";

const router = express.Router();

// Default Route
router.get("/", (req, res) => {
	res.send("Hello World");
});

// Health Check
router.get("/health", (req, res) => {
	res.send("OK");
});

// User Controller
// Read
router.get("/users", getUsers);
router.get("/user/:user_id", getUserDetails);

// Detail Controller
// Read
router.get("/details", getDetails);

// Social Contact Controller
// Read
router.get("/social_contacts", getSocialContacts);

// Education Controller
// Read
router.get("/educations", getEducations);

// Experience Controller
// Read
router.get("/experiences", getExperiences);

export default router;
