import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

  get geTagsHistory(): string[] {
    return [...this._tagsHistory];
  }
}
