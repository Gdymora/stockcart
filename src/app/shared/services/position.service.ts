import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Position } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  getPositionAll(): Observable<Position[]>{
    return this.http.get<Position> (`${environment.url}/positions`)
    .pipe(map((res: any) => {
      return res
    }))
  }

}
