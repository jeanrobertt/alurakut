import { ICommunity } from "./community";
import { IMessage } from "./message";
import { IUser } from "./user";

export interface ProfileState {
    userdata: IUser | null,
    followers: IUser[] | null,
    messages: IMessage[] | null,
    communities: ICommunity[] | null,
}

export interface IProfileSidebar {
    type: 'user' | 'community';
    data: IUser | ICommunity
  }