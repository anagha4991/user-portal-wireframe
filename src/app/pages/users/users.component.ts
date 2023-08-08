import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface Role {
  name: string;
  code: string;
}
interface status {
  name: string;
  code: string;
}
interface Publisher {
  name: string;
  code: string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  roles!: Role[];
  statuses!: status[];
  publishers!: Publisher[];
  filterItemArry: any[] = [];
  selectedCities!: Role[];

  constructor(private router: Router) {
    this.roles = [
      { name: 'Member', code: 'm' },
      { name: 'Writer', code: 'w' },
      { name: 'Journalist', code: 'j' },
    ];
    this.statuses = [
      { name: 'Active', code: 'AC' },
      { name: 'Not Varified', code: 'NV' },
      { name: 'Blocked', code: 'BD' },
    ];
    this.publishers = [
      { name: 'Formula News', code: 'FN' },
    ];
  }
  onChange(e: { itemValue: { name: any } }) {
    debugger
    //console.log(e.itemValue.name);
    if(e.itemValue.name != '' || e.itemValue.name != undefined){
      this.filterItemArry.push(e.itemValue.name);
    }
   // console.log(this.filterItemArry);
  }
  clearFilter() {
    this.filterItemArry.length = 0;
  }
  RemoveFilter(index: any) {
    //console.log(index);
    this.filterItemArry.splice(index,1);
  }
  UserDetails(id:number){
    this.router.navigate(['/user-details']);
  }
}
