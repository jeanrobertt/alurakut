import { Router } from "express";
import CommunityController from "../controllers/communityController";
import MessageController from "../controllers/messageController";
import GithubDataController from "../controllers/githubDataController";

const router: Router = Router();
const communityController = new CommunityController();
const messageController = new MessageController();
const githubDataController = new GithubDataController();

router.post("/githubdata", githubDataController.getGitHubData);
router.post("/verifytoken", githubDataController.verifyToken);

router.route('/community')
.get(communityController.getCommunities)
.post(communityController.createCommunity)
.put(communityController.updateCommunity)
.delete(communityController.deleteCommunity);

router.post("/joincommunity", communityController.joinCommunity);
router.post("/leavecommunity", communityController.leaveCommunity);

router.route('/messages')
.get(messageController.getMessages)
.post(messageController.sendMessage)
.put(messageController.updateMessage)
.delete(messageController.deleteMessage);

export default router;