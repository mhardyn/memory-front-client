import {Component, inject} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {HeaderComponent} from '../../header/header.component';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ApiService} from '../../api.service';
import {concatMap, map} from 'rxjs';

@Component({
  selector: 'app-word-bank-cards',
  imports: [
    AsyncPipe,
    HeaderComponent,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './word-bank-cards.component.html',
  styleUrl: './word-bank-cards.component.css',
  standalone: true
})
export class WordBankCardsComponent {
  private readonly apiService = inject(ApiService);
  private readonly route = inject(ActivatedRoute)

  cards$ = this.route.paramMap.pipe(
    map(params => params.get('categoryId')),
    concatMap(categoryId => this.apiService.getCards(Number.parseInt(categoryId!)))
  )
}
