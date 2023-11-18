import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',

  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  public nameHeroDelete: string = '';
  public heroNames: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk'];

  public deleteLastHero(): void {
    this.nameHeroDelete = this.heroNames.pop() || '';
  }
}
