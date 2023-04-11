import { Request, Response } from "express";
import { IMessage } from "../types/message";
import ScrapMessage from "../models/message";
import { logger } from "../config/logger.config";

class MessageController {

	async getMessages(req: Request, res: Response): Promise<void> {
		try {
			const scrapMessages: IMessage[] = await ScrapMessage.find({ receiver: req.query.receiver,  }).sort({ updatedAt: -1 });
			logger.info("Req received - getMessages");
			res.status(200).json({ scrapMessages });
			logger.info("Response sent with status 200");
		} catch (error) {
			res.status(500).send({ message: "Internal Server Error" });
			logger.error("Response sent with status 500 - Internal Server Error");
			logger.error(error);
		}
	}

	async sendMessage(req: Request, res: Response): Promise<void> {
		try {
			const body = req.body.message as Pick<
				IMessage,
				"text" | "sender" | "receiver"
			>;

			const scrapMessage: IMessage = new ScrapMessage({
				text: body.text,
				sender: body.sender,
				receiver: body.receiver,
			});

			const newMessage: IMessage = await scrapMessage.save();
			logger.info("Req received - sendMessage");
			res.status(201).json({
				message: "Message sent",
				scrapMessage: newMessage,
			});
			logger.info("Response sent with status 201");
		} catch (error) {
			res.status(500).send({ message: "Internal Server Error" });
			logger.error("Response sent with status 500 - Internal Server Error");
			logger.error(error);
		}
	}

	async updateMessage(req: Request, res: Response): Promise<void> {
		try {
			const body = req.body.message as Pick<IMessage, "text">;
			const updatedMessage: IMessage | null = await ScrapMessage.findByIdAndUpdate(
				req.params.id,
				{ text: body.text },
				{ new: true }
			);
			logger.info("Req received - updateMessage");
			res.status(200).json({
				message: "Message updated",
				scrapMessage: updatedMessage,
			});
			logger.info("Response sent with status 200");
		} catch (error) {
			res.status(500).send({ message: "Internal Server Error" });
			logger.error("Response sent with status 500 - Internal Server Error");
			logger.error(error);
		}
	}

	async deleteMessage(req: Request, res: Response): Promise<void> {
		try {
			const deletedMessage: IMessage | null = await ScrapMessage.findByIdAndRemove(
				req.params.id
			);
			logger.info("Req received - deleteMessage");
			res.status(200).json({
				message: "Message deleted",
				scrapMessage: deletedMessage,
			});
			logger.info("Response sent with status 200");
		} catch (error) {
			res.status(500).send({ message: "Internal Server Error" });
			logger.error("Response sent with status 500 - Internal Server Error");
			logger.error(error);
		}
	}
}

export default MessageController;