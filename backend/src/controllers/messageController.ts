import { Request, Response } from "express";
import { IMessage } from "../types/message";
import ScrapMessage from "../models/message";

const getMessages = async (req: Request, res: Response): Promise<void> => {
	try {
		const scrapMessages: IMessage[] = await ScrapMessage.find({ receiver: req.body.receiver,  }).sort({ updatedAt: -1 });
		console.log(new Date().toLocaleString() , " - Req received - getMessages");
		res.status(200).json({ scrapMessages });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" })
		throw error;
	}
};

const sendMessage = async (req: Request, res: Response): Promise<void> => {
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
		console.log(new Date().toLocaleString() , " - Req received - sendMessage");
		res.status(201).json({
			message: "Message sent",
			scrapMessage: newMessage,
		});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" })
		throw error;
	}
};

const updateMessage = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            query: { id },
            body
        } = req

        const updatedMessage: IMessage | null = await ScrapMessage.findByIdAndUpdate(
            { _id: id },
            body
        )
		console.log(new Date().toLocaleString() , " - Req received - updateMessage");
		res.status(201).json({
			message: "Message updated",
			scrapMessage: updatedMessage,
		});
    } catch (error) {
		res.status(500).send({ message: "Internal Server Error" })
        throw error;
    }
}

const deleteMessage = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedMessage: IMessage | null = await ScrapMessage.findByIdAndRemove(req.query.id)
		console.log(new Date().toLocaleString() , " - Req received - deleteMessage");
		res.status(200).json({
			message: "Message deleted",
			scrapMessage: deletedMessage,
		});
    } catch (error) {
		res.status(500).send({ message: "Internal Server Error" })
        throw error;
    }
}

export { getMessages, sendMessage, updateMessage, deleteMessage }