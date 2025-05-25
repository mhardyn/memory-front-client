import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WordBankCategoriesComponent} from './word-bank/word-bank-categories/word-bank-categories.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'word-bank/categories', component: WordBankCategoriesComponent}
];
