import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private _gifs: string[] = [];

  constructor() {}

  private organizeHistory(tag: string) {
    if (!tag || tag.length === 0) return;
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory.splice(this._tagsHistory.indexOf(tag), 1);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  public get geTagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  public get geGifs(): string[] {
    return [...this._gifs];
  }

  public searchTag(tag: string) {
    this.organizeHistory(tag);
  }
}
