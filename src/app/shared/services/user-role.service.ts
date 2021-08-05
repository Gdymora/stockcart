import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { catchError, map, takeWhile } from 'rxjs/operators';
import { Role, Users } from '../interfaces';
import { combineLatest, forkJoin, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {
  public user: Users[];
  public role: any;
  constructor(private http: HttpClient) { }


  getAll() {
    forkJoin(
      [this.getUserAll(),
      this.getRoleAll()],
    ).subscribe(([User, Role]) => {
      this.role = Role
      this.user = User.map((users: Users) => {
        users.role_name = Role.filter((role: Role) => role.id == users.role_id)
        return users
      })
    });
    return this.user
  }

  getUserAll() {
    return this.http.get(`${environment.url}/users`)
      .pipe(map((res: any) => {
        return res
      }))
  }

  getRoleAll() {
    return this.http.get(`${environment.url}/role`)
      .pipe(map((res: any) => {
        return res
      }))
  }

  getUser(id: number) {
    return this.http.get(`${environment.url}/users/${id}`)
      .pipe(map((res: any) => {
        return res
      }))
  }

  createUser(user: Users): Observable<Users> {
    return this.http.post<Users>(`${environment.url}/users`, user)

  }

  updateUser(user: Users): Observable<Users> {
    return this.http.put<Users>(`${environment.url}/users/${user.id}`, user)
  }

  remove(id: string) {
    return this.http.delete(`${environment.url}/users/${id}`)
  }


}
