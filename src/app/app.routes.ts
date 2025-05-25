import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WordBankCategoriesComponent} from './word-bank/word-bank-categories/word-bank-categories.component';
import {WordBankCategoriesAddComponent} from './word-bank/word-bank-categories/word-bank-categories-add/word-bank-categories-add.component';
import {WordBankCardsComponent} from './word-bank/word-bank-cards/word-bank-cards.component';
import {WordBankCardsAddComponent} from './word-bank/word-bank-cards/word-bank-cards-add/word-bank-cards-add.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'word-bank/categories', component: WordBankCategoriesComponent},
  {path: 'word-bank/categories/add', component: WordBankCategoriesAddComponent},
  {path: 'word-bank/categories/:categoryId/cards', component: WordBankCardsComponent},
  {path: 'word-bank/categories/:categoryId/cards/add', component: WordBankCardsAddComponent}
];
