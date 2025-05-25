import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {HeaderComponent} from '../../../header/header.component';
import {NonNullableFormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiService} from '../../../api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs';

@Component({
  selector: 'app-word-bank-cards-add',
  imports: [
    HeaderComponent,
    ReactiveFormsModule
  ],
  templateUrl: './word-bank-cards-add.component.html',
  styleUrl: './word-bank-cards-add.component.css',
  standalone: true
})
export class WordBankCardsAddComponent implements OnInit, OnDestroy {
  private readonly fb = inject(NonNullableFormBuilder);
  private readonly apiService= inject(ApiService);
  private readonly router= inject(Router);
  private readonly route = inject(ActivatedRoute);

  form = this.fb.group({
    word: ['', [Validators.required]],
    definition: ['', [Validators.required]],
    category_id: [0, [Validators.required, Validators.min(1)]]
  });

  addCard(){
    let controls = this.form.controls;

    this.apiService.addCard(
      controls.category_id.value,
      controls.word.value,
      controls.definition.value
    ).subscribe({
      next: () => this.router.navigate(['../'], {relativeTo: this.route})
    })
  }
    ngOnDestroy(): void {

    }
    ngOnInit(): void {
      this.route.params.pipe(
        map(params => params['categoryId']),
        map(categoryId => Number.parseInt(categoryId))
      ).subscribe({
        next: categoryId => this.form.patchValue({
          category_id: categoryId
        })
      })
    }

}
