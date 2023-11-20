import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../service/gifs.service';

@Component({
  selector: 'gifs-search-box',
  styleUrl: './search-box.component.scss',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtSearchBox')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private readonly gifsService: GifsService) {}

  public searchTag(): void {
    this.gifsService.searchTag(this.tagInput.nativeElement.value);
    this.tagInput.nativeElement.value = '';
  }
}
