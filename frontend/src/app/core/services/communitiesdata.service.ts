import { APIService } from './api.service';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ICommunity } from '../models/community';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { actions$ } from 'src/app/store/actions';

@Injectable({
  providedIn: 'root'
})
export class CommunitiesdataService {
  constructor(
    private apiService: APIService,
    private store: Store<AppState>
    ) { }

  async getCommunities(user: string): Promise<void> {
    try {
      const communitiesResponse = this.apiService.getCommunities(user)
      const communities = await lastValueFrom(communitiesResponse);

      if (communities.communities !== undefined ) {
        this.store.dispatch(actions$.setCommunities({communities: communities.communities}))
      }
    } catch (error) {
      console.log(error);
    }
  }

  async joinCommunity(id: string, user: string): Promise<void> {
    try {
      const communityResponse = this.apiService.joinCommunity(id, user)
      const community = await lastValueFrom(communityResponse);

      if (community.community !== undefined ) {
        this.store.dispatch(actions$.joinCommunity({community: community.community}))
      }
    } catch (error) {
      console.log(error);
    }
  }

  async leaveCommunity(id: string, user: string): Promise<void> {
    try {
      const communityResponse = this.apiService.leaveCommunity(id, user)
      const community = await lastValueFrom(communityResponse);

      if (community.community !== undefined ) {
        this.store.dispatch(actions$.leaveCommunity({community: community.community}))
      }
    } catch (error) {
      console.log(error);
    }
  }

  async createCommunity(community: ICommunity): Promise<void> {
    try {
      const communityResponse = this.apiService.createCommunity(community)
      const communityData = await lastValueFrom(communityResponse);
      console.log(communityData);
      
      if (communityData.community !== undefined ) {
        this.store.dispatch(actions$.createCommunity({community: communityData.community}))
      }
    } catch (error) {
      console.log(error);
    }
  }

  /*updateCommunity(id:string, community: ICommunity): ICommunity | undefined {
      let updatedCommunity: ICommunity = {} as ICommunity;
      this.apiService.updateCommunity(id, community).subscribe(
        communitiesdata => {
          if (communitiesdata.communities) {
            this.communitiesdata = communitiesdata.communities;
          }
          if (communitiesdata.community) {
            updatedCommunity = communitiesdata.community;
          }
        }
      )
      if (updatedCommunity.title)
        return updatedCommunity;
      else return undefined;
  }

  deleteCommunity(id: string) {
    this.apiService.deleteCommunity(id).subscribe(
      communitiesdata => {
        if (communitiesdata.communities) {
          this.communitiesdata = communitiesdata.communities;
        }
      }
    )
    if (updatedCommunity.title)
      return updatedCommunity;
    else return undefined;
  } */

}
