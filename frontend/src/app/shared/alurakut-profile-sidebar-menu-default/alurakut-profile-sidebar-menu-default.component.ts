import { Store } from '@ngrx/store';
import { Component, Input, OnChanges, ChangeDetectorRef } from '@angular/core';

import { CommunitiesdataService } from 'src/app/core/services/communitiesdata.service';
import { IUser } from 'src/app/core/models/user';
import { ICommunity } from 'src/app/core/models/community';
import { AppState } from 'src/app/store/reducers';
import { IProfileSidebar } from 'src/app/core/models/profile';

@Component({
  selector: 'app-alurakut-profile-sidebar-menu-default',
  templateUrl: './alurakut-profile-sidebar-menu-default.component.html',
  styleUrls: ['./alurakut-profile-sidebar-menu-default.component.css']
})
export class AlurakutProfileSidebarMenuDefaultComponent implements OnChanges{
  baseURL: string;
  @Input() data?: IProfileSidebar;
  community?: ICommunity;
  user?: IUser;
  login?: string;

  constructor(private store: Store<AppState>, private communityService: CommunitiesdataService, private changeDetector: ChangeDetectorRef) {
    this.baseURL = "http://alurakut.vercel.app";
  }

  ngOnInit(): void {
    this.store.select(state => state.user.userdata.login).subscribe(login => {
      if (login) {
        this.login = login;
      }
    });
  }

  ngOnChanges(): void {
    if (this.data?.type === 'user') {
      this.user = this.data?.data as IUser;
    } else {
      this.community = this.data?.data as ICommunity;
    }
    this.changeDetector.detectChanges();
  }
  /**Check if the user is in the community */
  isUserInCommunity() {
    if (this.community) {
      return this.community.users.includes(this.login!);
    }
    return false;
  }

  joinCommunity() {
    if (this.community?._id && this.login) {
      this.communityService.joinCommunity(this.community?._id!, this.login!);
      return;
    }
    console.log("Não foi posspivel entrar na comunidade");
  }
  
  leaveCommunity() {
    if (this.community?._id && this.login) {
      this.communityService.leaveCommunity(this.community?._id!, this.login!);
      return;
    }
    console.log("Não foi posspivel sair da comunidade");
  }
}
