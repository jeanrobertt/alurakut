import { Document } from "mongoose";

export interface IMessage extends Document {
    text: string,
    sender: string,
    receiver: string
}