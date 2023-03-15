import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/core/models/user';
import { ICommunity } from 'src/app/core/models/community';
import { IProfileSidebar } from 'src/app/core/models/profile';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrls: ['./profile-sidebar.component.css']
})
export class ProfileSidebarComponent implements OnChanges {
  userData?: IUser;
  communityData?: ICommunity;
  type?: 'user' | 'community';

  @Input() data?: IProfileSidebar;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data && this.data.data) {
      const data = this.data.data;
      if (this.data.type === 'community') {
        this.type = 'community';
        this.communityData = data as ICommunity;
      } else {
        this.type = 'user';
        this.userData = data as IUser;
      }
    }
    this.changeDetector.detectChanges();
  }
}

