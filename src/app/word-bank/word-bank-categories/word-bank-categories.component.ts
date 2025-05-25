import {Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Category} from '../models';
import {HeaderComponent} from '../../header/header.component';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-word-bank-categories',
  imports: [
    NgIf,
    NgForOf,
    HeaderComponent,
    AsyncPipe
  ],
  templateUrl: './word-bank-categories.component.html',
  styleUrl: './word-bank-categories.component.css',
  standalone: true
})
export class WordBankCategoriesComponent {
  private readonly apiService = inject(ApiService)

  categories$ = this.apiService.getCategories()
}
