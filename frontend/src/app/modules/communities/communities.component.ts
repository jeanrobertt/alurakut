import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { AppState } from 'src/app/store/reducers';
import { ICommunity } from 'src/app/core/models/community';
import { APIService } from 'src/app/core/services/api.service';
import { IProfileRelationsBox } from "src/app/shared/profile-relations-box/profile-relations-box.component";
import { IUser } from 'src/app/core/models/user';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-communities',
	templateUrl: './communities.component.html',
	styleUrls: ['./communities.component.css'],
})
export class CommunitiesComponent implements OnInit, OnDestroy {
  communityPage?: boolean;
  community$?: ICommunity;
  userdata?: IUser;
  communityData: IProfileRelationsBox = {} as IProfileRelationsBox;
  communities?: ICommunity[];

  private subscriptions = new Subscription();

	constructor(private store: Store<AppState>, private route:ActivatedRoute, private apiService: APIService) {}

	ngOnInit(): void {
    this.communityData.items = [] as any;
    this.subscriptions.add(
      this.store.select(state => state).subscribe(state => {  
        this.userdata = state.user.userdata;
        if (state.communities.communities) {
          this.communities = state.communities.communities;
          if (this.community$?._id) {
            this.getCommunity(this.community$._id);
          }
        }
      })
    );
    this.subscriptions.add(
      this.route.params.subscribe((params) => {
        if (params['id']) {
          this.getCommunity(params['id']);
        } else {
          this.communityPage = false;
        }
      })
    );
	}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getCommunity(id: string) {
    if (this.communities) {
      this.community$ = this.communities.find(community => community._id === id);
      if (this.community$) {
        this.setCommunity();
        return;
      }
    }
    this.apiService.getCommunity(id).subscribe((data) => {
      if (data.community) {
        this.community$ = data.community;
        this.setCommunity();
      }
    });
  };

  setCommunity() {
    this.communityPage = true;
    this.communityData.smallTitle = `Membros (${this.community$?.users.length})`;
    this.communityData.items = [] as any;
    this.community$?.users.forEach(user => {
      this.communityData.items.push({ 
        name: user, 
        image: `https://github.com/${user}.png`,
        link: `/u/${user}`
      })
    })
  }

  /* setCommunity(id: string) {
    this.apiService.getCommunity(id).subscribe((community) => {
			if (community.community) {
				this.community$ = community.community;
        this.communityData.smallTitle = `Membros (${this.community$?.users.length})`;

        this.community$?.users.forEach(user => {
          this.communityData.items.push({ 
            name: user, 
            image: `https://github.com/${user}.png`, 
            link: `/u/${user}`
          })
        })
			}
      this.communityPage = true;
		});
  } */
  
}
