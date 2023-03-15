import { model, Schema } from "mongoose";
import { IMessage } from "../types/message";

const messageSchema: Schema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        sender: {
            type: String,
            required: true
        },
        receiver: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export default model<IMessage>("scrap", messageSchema);