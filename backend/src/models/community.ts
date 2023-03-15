import { model, Schema } from "mongoose";
import { ICommunity } from "../types/community";

const communitySchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        },
        creatorSlug: {
            type: String,
            required: true
        },
        users: {
            type: [String],
            required: true
        }
    },
    {
        timestamps: true
    }
)

export default model<ICommunity>("community", communitySchema);