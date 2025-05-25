import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './word-bank/models';

const BASE_URL = 'http://localhost:5000'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly httpClient = inject(HttpClient)

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${BASE_URL}/categories`);
  }

  removeCategory(categoryId: number): Observable<any> {
    return this.httpClient.delete(`${BASE_URL}/categories/${categoryId}`);
  }
}
