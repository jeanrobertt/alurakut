export interface IMessage {
    _id?: string,
    text: string,
    sender: string,
    receiver: string
    createdAt?: string
    updatedAt?: string
}

export interface MessagesState {
    messages: IMessage[] | null
}

export type ApiMessageType = {
    message?: string,
    status?: number,
    scrapMessage?: IMessage,
    scrapMessages?: IMessage[]
}
