import { Document } from "mongoose";

export interface ICommunity extends Document {
    title: string,
    imageUrl: string,
    creatorSlug: string,
    users: string[]
}