import { Component, Input } from '@angular/core';
import { GifsService } from '../../service/gifs.service';
import { Gift, GiftResult } from '../../service/interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  @Input()
  public gifs: GiftResult[] = [];

  constructor(private readonly gifsService: GifsService) {}

  getTagsHistory(): string[] {
    return this.gifsService.geTagsHistory;
  }
}
