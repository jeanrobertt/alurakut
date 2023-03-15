import { Component } from '@angular/core';
import { CommunitiesdataService } from 'src/app/core/services/communitiesdata.service';
import { ICommunity } from 'src/app/core/models/community';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { first, lastValueFrom, map } from 'rxjs';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css']
})
export class CreateCommunityComponent {
  title: string = '';
  imageUrl: string = '';
  user: string = ''

  constructor(private communitydataService: CommunitiesdataService, private store: Store<AppState>) {}

  createCommunity(e: Event): void{
    e.preventDefault();
    try {
      lastValueFrom(this.store.select(state => state.user.userdata?.login!).
      pipe(
        first(), 
        map(user => {
          const community: ICommunity = {
            title: this.title,
            imageUrl: this.imageUrl,
            users: [user],
            creatorSlug: user
          }
          console.log(community);
          this.communitydataService.createCommunity(community)
        })));
  
      
      
    } catch (error) {
      console.log(error);

    }
  }
}
