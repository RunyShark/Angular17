import { Component } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { Gift } from '../../service/interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomeComponent {
  constructor(private readonly gifsService: GifsService) {}

  get gifs(): Gift[] {
    return this.gifsService.geGifs;
  }
}
