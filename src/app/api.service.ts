import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Card, Category} from './word-bank/models';

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

  addCategory(categoryName: string): Observable<Category> {
    return this.httpClient.post<Category>(`${BASE_URL}/categories`, {
      category_name: categoryName
    })
  }

  getCards(categoryId: number): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${BASE_URL}/categories/${categoryId}/cards`);
  }

  addCard(categoryId: number, word: string, definition: string): Observable<Card> {
    return this.httpClient.post<Card>(`${BASE_URL}/categories/${categoryId}/cards`, {
      word,
      definition
    })
  }

  removeCard(categoryId: number, cardId: number): Observable<any> {
    return this.httpClient.delete(`${BASE_URL}/categories/${categoryId}/cards/${cardId}`);
  }
}
