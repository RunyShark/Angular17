import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  styleUrl: './search-box.component.scss',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtSearchBox')
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag() {
    const testInput = this.tagInput.nativeElement.value;
    console.log('searchTag', testInput);
  }
}
