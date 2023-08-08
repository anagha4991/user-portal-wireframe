import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { IndividualUserDetailsComponent } from './pages/users/individual-user-details/individual-user-details.component';

const routes: Routes = [
  {
    path: 'users',
    component:UsersComponent,
    children: [
      {
        path: 'user-details',
        component: IndividualUserDetailsComponent,
      },
    ]
    // loadChildren: () =>
    //   import('./pages/users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
