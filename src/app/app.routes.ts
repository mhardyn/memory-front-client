import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WordBankCategoriesComponent} from './word-bank/word-bank-categories/word-bank-categories.component';
import {
  WordBankCategoriesAddComponent
} from './word-bank/word-bank-categories/word-bank-categories-add/word-bank-categories-add.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'word-bank/categories', component: WordBankCategoriesComponent},
  {path: 'word-bank/categories/add', component: WordBankCategoriesAddComponent}
];
