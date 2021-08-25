import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Category } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  
  getCategoriesAll(): Observable<Category[]>{
    return this.http.get<Category> (`${environment.url}/positioncategorys`)
    .pipe(map((res: any) => {
      return res
    }))
  }

  getCategories(id: number) {
    return this.http.get<Category>(`${environment.url}/positioncategorys/${id}`)
      .pipe(map((res: Category) => {
        return res
      }))
  }

  createCategories(category: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.url}/positioncategorys`, category)

  }

  updateCategories(category: Category): Observable<Category> {
    return this.http.put<Category>(`${environment.url}/positioncategorys/${category.id}`, category)
  }

  remove(id: string) {
    return this.http.delete(`${environment.url}/users/${id}`)
  }
  
}
