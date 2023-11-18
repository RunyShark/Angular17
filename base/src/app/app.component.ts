import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent, CounterComponent, ListComponent } from './components';
import { HeroesModule } from './components/heroes/heroes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroesModule, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public title: string = 'base';
  public counter: number = 0;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public resetCount(): void {
    this.counter = 0;
  }
}
