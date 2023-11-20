import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private _gifs: string[] = [];

  constructor() {}

  public get geTagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  public get geGifs(): string[] {
    return [...this._gifs];
  }

  public searchTag(tag: string) {
    this._tagsHistory.unshift(tag);
  }
}
