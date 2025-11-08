import express from "express";
import { getAllContacts } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessagesByUserId } from "../controllers/message.controller.js";
import { sendMessage } from "../controllers/message.controller.js";
import { getChatPartners } from "../controllers/message.controller.js";
import { acrjetProtection } from "../middleware/arcjet.middleware.js";

const router = express.Router();

//this requests will get rate limited and then authenticated
router.use(acrjetProtection,protectRoute);

router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);

export default router;
