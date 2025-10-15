import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Category {
  id: number;
  name: string;
  label: string;
}

@Injectable({
  providedIn: 'root',
})
export class CathegorieService {
  cathegories: Category[] = [];
  private readonly baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories`);
  }

  getNameCategoryById(id: number): Observable<string> {
    return this.http
      .get<Category[]>(`${this.baseUrl}/categories?id=${id.toString()}`)
      .pipe(
        map(
          (categories: Category[]) =>
            categories[0]?.label || 'Catégorie inconnue'
        )
      );
  }
}
