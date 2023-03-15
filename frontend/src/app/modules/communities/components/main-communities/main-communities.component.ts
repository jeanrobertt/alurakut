import { Store } from '@ngrx/store';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Component, OnInit } from '@angular/core';
import { ICommunity } from 'src/app/core/models/community';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-main-communities',
  templateUrl: './main-communities.component.html',
  styleUrls: ['../../communities.component.css']
})
export class MainCommunitiesComponent implements OnInit {
  communities$?: ICommunity[];
  communitiesSlice$?: ICommunity[];
  

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.store
          .select((state) => state.communities)
          .subscribe((data) => {
            this.communities$ = data.communities!
          });
    this.communitiesSlice$ = this.communities$!.slice(0, 10);
  }

  navigateToCommunity(community: ICommunity) {
    //Add community title and id to end of url like query params
    this.router.navigate(['community/' + community._id]);
  }

  communityLength(community: ICommunity) {
    return community.users.length > 1 ? `${community.users.length} membros` : `${community.users.length} membro`;
  }

  pageChanged(event: PageChangedEvent) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.communitiesSlice$ = this.communities$!.slice(startItem, endItem);
  }
}
