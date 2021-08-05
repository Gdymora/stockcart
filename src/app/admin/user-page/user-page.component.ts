import { Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Role, Users } from 'src/app/shared/interfaces';
import { UserRoleService } from 'src/app/shared/services/user-role.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(public usersServis: UserRoleService) { }
  users: any = []
  user: Users
  pSub$: Subscription
  cSub$: Subscription
  testUser = {
    "id": 8,
    "role_id": 2,
    "status": 1,
    "email": "demo@teedex.net",
    "password": "654321",
    "fio": "Тестовый пользователь"
  }
  ngOnInit(): void {
 console.log(this.usersServis.getAll())
 console.log(this.usersServis.user)
    /*  this.pSub$ = this.usersServis.createUser(this.testUser).subscribe((req) => {
       console.log(req)
     }) */
    /*  this.pSub$ = this.usersServis.updateUser(this.testUser).subscribe((req) => {
       console.log(req)
     },
       error => { console.log(error) }
     ) */
  

    this.pSub$ = this.usersServis.getUser(this.testUser.id).subscribe((user: Users) => {
      this.user = user
      console.log(user)
    },
      error => { console.log(error) }
    )

  }

  ngOnDesroy() {
    if (this.pSub$) {
      this.pSub$.unsubscribe()
    }

    if (this.cSub$) {
      this.cSub$.unsubscribe()
    }
  }
  displayedColumns: string[] = ['position', 'id', 'role_id', 'fio'];
}
