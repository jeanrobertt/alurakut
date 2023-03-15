import { Router } from "express";
import { getCommunities, addCommunity, updateCommunity, deleteCommunity, joinCommunity, leaveCommunity } from "../controllers/communityController";
import { getMessages, sendMessage, updateMessage, deleteMessage } from '../controllers/messageController';
import { getGitHubData, verifyToken } from '../controllers/githubDataController';

const router: Router = Router();

router.post("/api/githubdata", getGitHubData);
router.post("/api/verifytoken", verifyToken);

router.get("/api/getcommunity", getCommunities);
router.post("/api/getcommunity", getCommunities);
router.post("/api/addcommunity", addCommunity);
router.put("/api/updateCommunity", updateCommunity);
router.delete("/api/deletecommunity", deleteCommunity);
router.post("/api/joincommunity", joinCommunity);
router.post("/api/leavecommunity", leaveCommunity);

router.post("/api/getmessages", getMessages);
router.post("/api/addmessage", sendMessage);
router.put("/api/updatemessage", updateMessage);
router.delete("/api/deletemessage", deleteMessage);

export default router;