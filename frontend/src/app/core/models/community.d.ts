export interface ICommunity {
    _id?: string,
    title: string,
    imageUrl: string,
    creatorSlug: string,
    users: string[],
    createdAt?: string
    updatedAt?: string
}

export interface CommunitiesState {
    communities: ICommunity[] | null
}

export type ApiCommunityType = {
    message?: string,
    status?: number,
    community?: ICommunity,
    communities?: ICommunity[]
}

