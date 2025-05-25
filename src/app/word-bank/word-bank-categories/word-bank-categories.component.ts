import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Category} from '../models';
import {HeaderComponent} from '../../header/header.component';

@Component({
  selector: 'app-word-bank-categories',
  imports: [
    NgIf,
    NgForOf,
    HeaderComponent
  ],
  templateUrl: './word-bank-categories.component.html',
  styleUrl: './word-bank-categories.component.css',
  standalone: true
})
export class WordBankCategoriesComponent {
  categories: Category[]=[
    {category_id: 1, category_name: "Sport", cards_count: 1},
    {category_id: 2, category_name: "Rzeczowniki", cards_count: 0}
  ];
}
