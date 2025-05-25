import {Component, inject} from '@angular/core';
import {HeaderComponent} from '../../../header/header.component';
import {ApiService} from '../../../api.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-word-bank-categories-add',
  imports: [
    HeaderComponent,
    FormsModule
  ],
  templateUrl: './word-bank-categories-add.component.html',
  styleUrl: './word-bank-categories-add.component.css',
  standalone: true
})
export class WordBankCategoriesAddComponent {
  private readonly apiService = inject(ApiService);
  private readonly router = inject(Router);

  categoryName = '';

  addCategory() {
    this.apiService.addCategory(this.categoryName).subscribe( {
      next: () => this.router.navigateByUrl('/word-bank/categories'),
    })
  }
}
