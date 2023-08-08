import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { IndividualUserDetailsComponent } from './individual-user-details/individual-user-details.component';
import { TabViewModule } from 'primeng/tabview';
@NgModule({
  declarations: [
    UsersComponent,
    IndividualUserDetailsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    RouterModule,
    MultiSelectModule,
    ButtonModule,
    TabViewModule 
  ]
})
export class UsersModule { }
