import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { lastValueFrom } from 'rxjs';

import { APIService } from './api.service';
import { AppState } from 'src/app/store/reducers';
import { actions$ } from 'src/app/store/actions';

@Injectable({
  providedIn: 'root'
})
export class UserProfileDataService {

  constructor(private apiService: APIService, private store: Store<AppState>, private router: Router) { }

  async setUserData(user: string) {
    try {
      const [userdata, messages, communities] = await Promise.all([
        lastValueFrom(this.apiService.getGitHubData(user, false)),
        lastValueFrom(this.apiService.getMessages(user)),
        lastValueFrom(this.apiService.getCommunities(user))
      ]);
      
      this.store.dispatch(actions$.setUserProfileData({ userdata: userdata.userdata }));
      this.store.dispatch(actions$.setProfileFollowersData({ followers: userdata.followers }));
      this.store.dispatch(actions$.setProfileMessages({ messages: messages.scrapMessages! }));
      this.store.dispatch(actions$.setProfileCommunities({ communities: communities.communities! }));
    } catch (error) {
      console.log(error);
      this.router.navigate(['error']);
      return;
    }
  }
}
