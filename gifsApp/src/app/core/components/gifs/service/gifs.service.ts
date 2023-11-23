import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gift, SearchResponse } from './interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private API_KEY = 'A4PmOMjUf8ljnQweISoGBz47Z5ZBIsCT';
  private API_URL = 'https://api.giphy.com/v1/gifs';
  private _tagsHistory: string[] = [];
  private _gifs: Gift[] = [];

  constructor(private readonly http: HttpClient) {}

  private organizeHistory(tag: string) {
    if (!tag || tag.length === 0) return;
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory.splice(this._tagsHistory.indexOf(tag), 1);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.slice(0, 10);
  }

  private params(tag: string) {
    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('limit', '10')
      .set('q', tag);
    return params;
  }

  public get geTagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  public get geGifs(): Gift[] {
    return [...this._gifs];
  }

  public searchTag(tag: string) {
    this.organizeHistory(tag);

    this.http
      .get<SearchResponse>(`${this.API_URL}/search`, {
        params: this.params(tag),
      })
      .subscribe((res) => (this._gifs = res.data));
  }
}
