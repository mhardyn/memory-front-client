import {Component, Input, input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true
})
export class HeaderComponent {
  @Input({required: true}) title: string = '';
  @Input({required: false}) backLink: string = '../';
}
