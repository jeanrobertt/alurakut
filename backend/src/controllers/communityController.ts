import { Request, Response } from "express";
import { ICommunity } from "../types/community";
import Community from "../models/community";

const getCommunities = async (req: Request, res: Response): Promise<void> => {
	try {
		let communities: ICommunity[];
		let community;
		console.log(new Date().toLocaleString() , " - Req received - getCommunities");
		if (req.body.user) {
			communities = await Community.find({ users: req.body.user });
			res.status(200).json({ communities });
		} else if(req.body.id) {
			community = await Community.findById({ _id: req.body.id });
			res.status(200).json({ community });
		} else {
			communities = await Community.find();
			res.status(200).json({ communities });
		}
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" })

	}
};

const addCommunity = async (req: Request, res: Response): Promise<void> => {
	try {
		const body = req.body as Pick<
			ICommunity,
			"title" | "imageUrl" | "creatorSlug"
		>;

		const community: ICommunity = new Community({
			title: body.title,
			imageUrl: body.imageUrl,
			creatorSlug: body.creatorSlug,
			users: [body.creatorSlug]
		});

		const newCommunity: ICommunity = await community.save();
		console.log(new Date().toLocaleString() , " - Req received - addCommunity");
		res.status(201).json({
			message: "Community created",
			community: newCommunity,
		});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" })
	}
};

const updateCommunity = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            query: { id },
            body
        } = req

        const updatedCommunity: ICommunity | null = await Community.findByIdAndUpdate(
            { _id: id },
            body,
			{returnDocument: "after"}
        )
		console.log(new Date().toLocaleString() , " - Req received - updateCommunity");
		res.status(200).json({
			message: "Community updated",
			community: updatedCommunity,
		});
    } catch (error) {
		res.status(500).send({ message: "Internal Server Error" })
    }
}

const deleteCommunity = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedCommunity: ICommunity | null = await Community.findByIdAndDelete(req.query.id)
		console.log(new Date().toLocaleString() , " - Req received - deleteCommunities");
		res.status(200).json({
			message: "Community deleted",
			community: deletedCommunity,
		});
    } catch (error) {
		res.status(500).send({ message: "Internal Server Error" })
    }
}

const joinCommunity = async (req: Request, res: Response): Promise<void> => {
    try {
        const { body } = req

        const updatedCommunity: ICommunity | null = await Community.findByIdAndUpdate(
            { _id: body.id },
            { $push: {users: body.user} },
			{returnDocument: "after"}
        )
		console.log(new Date().toLocaleString() , " - Req received - joinCommunity");
		res.status(200).json({
			message: "User successfully joined community",
			community: updatedCommunity,
		});
    } catch (error) {
		res.status(500).send({ message: "Internal Server Error" })
        console.log(error);
    }
}

const leaveCommunity = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            query: { id },
            body
        } = req

        const updatedCommunity: ICommunity | null = await Community.findByIdAndUpdate(
            { _id: id },
            { $pull: { users: body.user } },
			{ returnDocument: "after" }
        )
		console.log(new Date().toLocaleString() , " - Req received - leaveCommunity");
		res.status(200).json({
			message: "User left the community",
			community: updatedCommunity,
		});
    } catch (error) {
		res.status(500).send({ message: "Internal Server Error" })
		console.log(error);
    }
}

export { getCommunities, addCommunity, updateCommunity, deleteCommunity, joinCommunity, leaveCommunity }