import { Component } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  constructor(private readonly gifsService: GifsService) {}

  getTagsHistory(): string[] {
    return this.gifsService.geTagsHistory;
  }
}
