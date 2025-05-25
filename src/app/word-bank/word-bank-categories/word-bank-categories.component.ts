import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-word-bank-categories',
  imports: [
    NgIf
  ],
  templateUrl: './word-bank-categories.component.html',
  styleUrl: './word-bank-categories.component.css',
  standalone: true
})
export class WordBankCategoriesComponent {
  categories =[];
}
