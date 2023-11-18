import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  private heroNames: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk'];
  public name: string = 'Ironman';
  public age: number = 45;

  public get getCapitalizedName(): string {
    return this.name.toUpperCase();
  }

  public get getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changedHero(): void {
    this.name =
      this.heroNames[Math.floor(Math.random() * this.heroNames.length)];
  }

  public changeAge(): void {
    this.age = Math.floor(Math.random() * 100);
  }
}
