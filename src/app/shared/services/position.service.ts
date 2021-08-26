import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Position, Positions } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }
 
  getPositionAll(): Observable<Positions> {
    return this.http.get<Positions>(`${environment.url}/positions`)
      .pipe(map((res: Positions) => {
        return res
      }))
  }


  getCategoriesPageEvent(categoryId:number, size: number, number: number): Observable<Positions> {
    return this.http.get<Positions>(`${environment.url}/positions?page.size=${size}&page.number=${number}`)
      .pipe(map((res: Positions) => {
        return res
      }))
  }

  getDataByFilter(value: string): Observable<Position> {
    return this.http.get<Position>(`${environment.url}/positioncategorys`)

  }

}
