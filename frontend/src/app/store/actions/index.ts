import { createAction, props } from '@ngrx/store';
import { ICommunity } from 'src/app/core/models/community';
import { IMessage } from 'src/app/core/models/message';
import { IUser } from 'src/app/core/models/user';

export const actions$ = {
  loginSuccess: createAction('[User] Login Success', props<{ token: string }>()),
  logout: createAction('[User] Logout'),
  setUserData: createAction('[User] Set User Data', props<{ userdata: IUser }>()),  
  setFollowersData: createAction('[User] Set Followers Data', props<{ followers: IUser[] }>()),  
  setToken: createAction('[User] Set Token', props<{ token: string }>()),

  setMessages: createAction('[Messages] Set Messages', props<{ messages: IMessage[] }>()),  
  sendMessage: createAction('[Message] Send Message', props<{ message: IMessage }>()),  
  clearMessages: createAction('[User] Logout'),

  setCommunities: createAction('[Communities] Set Communities', props<{ communities: ICommunity[] }>()),  
  createCommunity: createAction('[Community] Create Community', props<{ community: ICommunity }>()),  
  joinCommunity: createAction('[Community] Join Community', props<{ community: ICommunity }>()),  
  leaveCommunity: createAction('[Community] Leave Community', props<{ community: ICommunity }>()),  
  clearCommunities: createAction('[User] Logout'),

  setUserProfileData: createAction('[User Profile] Set User profile Data', props<{ userdata: IUser }>()),  
  setProfileFollowersData: createAction('[User Profile] Set profile Followers Data', props<{ followers: IUser[] }>()),  
  setProfileMessages: createAction('[Profile Messages] Set profile Messages', props<{ messages: IMessage[] }>()),  
  setProfileCommunities: createAction('[Profile Communities] Set profile Communities', props<{ communities: ICommunity[] }>()),
  profileLogout: createAction('[User Profile] Logout')
};
