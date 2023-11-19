import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent, CounterComponent } from './components';
import { HeroesModule } from './components/heroes/heroes.module';
import { MainModule } from './components/dbz/dbz.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeroesModule,
    CounterComponent,
    MainModule,
  ],
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
