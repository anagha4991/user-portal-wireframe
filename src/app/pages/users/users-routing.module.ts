import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { IndividualUserDetailsComponent } from './individual-user-details/individual-user-details.component';

const routes: Routes = [
 // { path: 'users', component: UsersComponent },
  { path: 'user-details', component: IndividualUserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
