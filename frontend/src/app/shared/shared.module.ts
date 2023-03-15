import { RouterModule } from '@angular/router';
import { GridBoxComponent } from 'src/app/shared/grid-box/grid-box.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainGridComponent } from 'src/app/shared/main-grid/main-grid.component';
import { ProfileRelationsBoxComponent } from 'src/app/shared/profile-relations-box/profile-relations-box.component';
import { ProfileSidebarComponent } from 'src/app/shared/profile-sidebar/profile-sidebar.component';
import { AlurakutMenuComponent } from 'src/app/shared/alurakut-menu/alurakut-menu.component';
import { AlurakutProfileSidebarMenuDefaultComponent } from 'src/app/shared/alurakut-profile-sidebar-menu-default/alurakut-profile-sidebar-menu-default.component';
import { AlurakutProfileSidebarComponent } from 'src/app/shared/alurakut-profile-sidebar/alurakut-profile-sidebar.component';
import { OrkutIconSetComponent } from 'src/app/shared/orkut-icon-set/orkut-icon-set.component';
import { MessagesComponent } from './messages/messages.component';

import { TooltipModule } from "ngx-bootstrap/tooltip";


@NgModule({
  declarations: [
    MainGridComponent,
    GridBoxComponent,
    ProfileSidebarComponent,
    ProfileRelationsBoxComponent,
    AlurakutMenuComponent,
    OrkutIconSetComponent,
    AlurakutProfileSidebarMenuDefaultComponent,
    AlurakutProfileSidebarComponent,
    MessagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    TooltipModule.forRoot()
  ],
  exports: [
    MainGridComponent,
    GridBoxComponent,
    ProfileSidebarComponent,
    ProfileRelationsBoxComponent,
    AlurakutMenuComponent,
    OrkutIconSetComponent,
    AlurakutProfileSidebarMenuDefaultComponent,
    AlurakutProfileSidebarComponent,
    MessagesComponent
  ]
})
export class SharedModule { }
