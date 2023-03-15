import { createReducer, on, ActionReducerMap } from '@ngrx/store';
import {  IUser, UserState } from 'src/app/core/models/user';
import {  MessagesState } from 'src/app/core/models/message';
import { CommunitiesState } from 'src/app/core/models/community';
import { ProfileState } from 'src/app/core/models/profile';
import { actions$ } from 'src/app/store/actions';

export interface AppState {
	user: UserState,
	messages: MessagesState,
	communities: CommunitiesState,
	userProfile: ProfileState
}

const initialState: AppState = {
	user: { isLoggedIn: false, userdata: {} as IUser, followers: {} as IUser[], token: '' },
	messages: { messages: null },
	communities: { communities: null },
	userProfile: {
		userdata: null,
		followers: null,
		messages:  null ,
		communities:  null ,
	}
};

const userReducer = createReducer(
	initialState.user,
	on(actions$.loginSuccess, (state, { token }) => ({
		...state,
		isLoggedIn: true,
		token,
	})),
	on(actions$.logout, (state) => ({ ...initialState.user })),
	on(actions$.setUserData, (state, { userdata }) => ({ ...state, userdata })),
	on(actions$.setFollowersData, (state, { followers }) => ({ ...state, followers })),
	on(actions$.setToken, (state, { token }) => ({ ...state, token }))
);

const messagesReducer = createReducer(
	initialState.messages,
	on(actions$.setMessages, (state, { messages }) => ({ ...state, messages })),

	on(actions$.clearMessages, (state) => ({ ...initialState.messages }))
);

const communitiesReducer = createReducer(
	initialState.communities,
	on(actions$.setCommunities, (state, { communities }) => ({ ...state, communities })),
	on(actions$.createCommunity, (state, { community }) => {
		return {
			...state,
			communities: state.communities
				? [community, ...state.communities]
				: [community],
		};
	}),
	on(actions$.joinCommunity, (state, { community }) => {
		return {
			...state,
			communities: state.communities
				? [community, ...state.communities]
				: [community],
		};
	}),
	on(actions$.leaveCommunity, (state, { community }) => {
		return {
			...state,
			communities: state.communities
				? state.communities.filter((c) => c._id !== community._id)
				: null,
		};
	}),
	on(actions$.clearCommunities, (state) => ({ ...initialState.communities }))
);


const userProfileReducer = createReducer(
	initialState.userProfile,
	on(actions$.setUserProfileData, (state, { userdata }) => ({...state, userdata })),
	on(actions$.setProfileFollowersData, (state, { followers }) => ({ ...state, followers })),

	on(actions$.setProfileMessages, (state, { messages }) => ({ ...state, messages })),
	on(actions$.sendMessage, (state, { message }) => {
		const msgs = state.messages ? [ message, ...state.messages! ] : [ message ]
		return {
			...state,
			messages: msgs
		}
	}),
	
	on(actions$.setProfileCommunities, (state, { communities } ) => ({ ...state, communities })),

	on(actions$.profileLogout, (state) => ({ ...initialState.userProfile })),
)

export const reducers: ActionReducerMap<AppState> = {
	user: userReducer,
	messages: messagesReducer,
	communities: communitiesReducer,
	userProfile: userProfileReducer
}
