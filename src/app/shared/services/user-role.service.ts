import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Users } from '../interfaces';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${environment.url}/users`)
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
