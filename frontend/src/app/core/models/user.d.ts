export interface IUser {
    login: string,
    avatar_url: string,
    url: string,
    followers_url: string,
    following_url: string,
    name: string,
    location: string,
    bio: string,
    followers: number,
    following: number
}

export interface UserProfileState {
    userdata: IUser,
    followers: IUser[],
}

export interface UserState {
    isLoggedIn: boolean,
    userdata: IUser,
    followers: IUser[],
    token: string,
}

export type ApiUserType = {
    message: string,
    status: number,
    userdata: IUser,
    followers: IUser[],
    token?: string,
    decoded?: {
        githubUser: string,
        login: boolean,
        iat: number,
        exp: number
    }
}