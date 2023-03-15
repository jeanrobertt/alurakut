import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunitiesRoutingModule } from './communities-routing.module';
import { CommunitiesComponent } from './communities.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { MainCommunitiesComponent } from './components/main-communities/main-communities.component';
import { MainCommunityComponent } from './components/main-community/main-community.component';

@NgModule({
  declarations: [
    CommunitiesComponent,
    MainCommunitiesComponent,
    MainCommunityComponent
  ],
  imports: [
    CommonModule,
    CommunitiesRoutingModule,
    SharedModule,
    PaginationModule.forRoot()
  ]
})
export class CommunitiesModule { }
