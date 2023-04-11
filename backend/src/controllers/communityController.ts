import { Request, Response } from "express";
import { ICommunity } from "../types/community";
import Community from "../models/community";
import { logger } from "../config/logger.config";
class CommunityController {
	async getCommunities(req: Request, res: Response): Promise<void> {
		try {
			let communities: ICommunity[];
			let community;
			logger.info("Req received - getCommunities");
			if (req.query.user) {
				communities = await Community.find({ users: req.query.user });
				res.status(200).json({ communities });
				logger.info("Response sent with status 200");
			} else if (req.query.id) {
				community = await Community.findById({ _id: req.query.id });
				res.status(200).json({ community });
				logger.info("Response sent with status 200");
			} else {
				communities = await Community.find();
				res.status(200).json({ communities });
				logger.info("Response sent with status 200");
			}
		} catch (error) {
			res.status(500).send({ message: "Internal Server Error" });
			logger.error(
				"Response sent with status 500 - Internal Server Error"
			);
			logger.error(error);
		}
	}

	async createCommunity(req: Request, res: Response): Promise<void> {
		try {
			const body = req.body as Pick<
				ICommunity,
				"title" | "imageUrl" | "creatorSlug"
			>;

			const community: ICommunity = new Community({
				title: body.title,
				imageUrl: body.imageUrl,
				creatorSlug: body.creatorSlug,
				users: [body.creatorSlug],
			});

			const newCommunity: ICommunity = await community.save();
			logger.info("Req received - createCommunity");
			res.status(201).json({
				message: "Community created",
				community: newCommunity,
			});
			logger.info("Response sent with status 201");
		} catch (error) {
			res.status(500).send({ message: "Internal Server Error" });
			logger.error(
				"Response sent with status 500 - Internal Server Error"
			);
			logger.error(error);
		}
	}

	async updateCommunity(req: Request, res: Response): Promise<void> {
		try {
			const {
				query: { id },
				body,
			} = req;

			const updatedCommunity: ICommunity | null =
				await Community.findByIdAndUpdate({ _id: id }, body, {
					returnDocument: "after",
				});
			logger.info("Req received - updateCommunity");
			res.status(200).json({
				message: "Community updated",
				community: updatedCommunity,
			});
			logger.info("Response sent with status 200");
		} catch (error) {
			res.status(500).send({ message: "Internal Server Error" });
			logger.error(
				"Response sent with status 500 - Internal Server Error"
			);
			logger.error(error);
		}
	}

	async deleteCommunity(req: Request, res: Response): Promise<void> {
		try {
			const deletedCommunity: ICommunity | null =
				await Community.findByIdAndDelete(req.query.id);
			logger.info("Req received - deleteCommunities");
			res.status(200).json({
				message: "Community deleted",
				community: deletedCommunity,
			});
			logger.info("Response sent with status 200");
		} catch (error) {
			res.status(500).send({ message: "Internal Server Error" });
			logger.error(
				"Response sent with status 500 - Internal Server Error"
			);
			logger.error(error);
		}
	}

	async joinCommunity(req: Request, res: Response): Promise<void> {
		try {
			const { body } = req;

			const updatedCommunity: ICommunity | null =
				await Community.findByIdAndUpdate(
					{ _id: body.id },
					{ $push: { users: body.user } },
					{ returnDocument: "after" }
				);
			logger.info("Req received - joinCommunity");
			res.status(200).json({
				message: "User successfully joined community",
				community: updatedCommunity,
			});
			logger.info("Response sent with status 200");
		} catch (error) {
			res.status(500).send({ message: "Internal Server Error" });
			logger.error(
				"Response sent with status 500 - Internal Server Error"
			);
			logger.error(error);
		}
	}

	async leaveCommunity(req: Request, res: Response): Promise<void> {
		try {
			const {
				query: { id },
				body,
			} = req;

			const updatedCommunity: ICommunity | null =
				await Community.findByIdAndUpdate(
					{ _id: id },
					{ $pull: { users: body.user } },
					{ returnDocument: "after" }
				);
			logger.info("Req received - leaveCommunity");
			res.status(200).json({
				message: "User left the community",
				community: updatedCommunity,
			});
			logger.info("Response sent with status 200");
		} catch (error) {
			res.status(500).send({ message: "Internal Server Error" });
			logger.error(
				"Response sent with status 500 - Internal Server Error"
			);
			logger.error(error);
		}
	}
}

export default CommunityController;
