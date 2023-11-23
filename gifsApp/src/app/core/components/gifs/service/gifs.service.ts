import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gift, GiftResult, SearchResponse } from './interface';
import {
  LocalStorageService,
  SetLocalStorage,
} from '../../../../shared/service/local-storage.service';

interface GiftStorage {
  key: string;
  value: GiftResult[];
}

enum KEY_STORAGE {
  HISTORY_GIF = 'historyGifs',
}
@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private API_KEY = 'A4PmOMjUf8ljnQweISoGBz47Z5ZBIsCT';
  private API_URL = 'https://api.giphy.com/v1/gifs';
  private _tagsHistory: string[] = [];
  private _gifs: GiftResult[] = [];

  constructor(
    private readonly http: HttpClient,
    private readonly localStorageService: LocalStorageService
  ) {}

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

  private saveHistoryGif({ key, value }: SetLocalStorage) {
    const historyValue = this.localStorageService.get(
      KEY_STORAGE.HISTORY_GIF
    ) as GiftStorage[];

    if (!historyValue) {
      this.localStorageService.set({
        key: KEY_STORAGE.HISTORY_GIF,
        value: [{ key, value }],
      });
      return;
    }

    if (historyValue.map((gif) => gif.key).includes(key)) return;

    this.localStorageService.set({
      key: KEY_STORAGE.HISTORY_GIF,
      value: [{ key, value }, ...historyValue],
    });
  }

  private getHistoryGif(tag: string) {
    const historyValue = this.localStorageService.get(KEY_STORAGE.HISTORY_GIF);

    if (!historyValue) return;
    const key = historyValue.find((gif: SetLocalStorage) => gif.key === tag);
    if (!key) return;

    return JSON.parse(key.value);
  }

  public get geTagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  public get geGifs(): GiftResult[] {
    return [...this._gifs];
  }

  public searchTag(tag: string) {
    this.organizeHistory(tag);
    const historyGif = this.getHistoryGif(tag);
    if (historyGif) {
      this._gifs = historyGif;
      return;
    }

    this.http
      .get<SearchResponse>(`${this.API_URL}/search`, {
        params: this.params(tag),
      })
      .subscribe((res) => {
        const value = res.data.map(({ id, images, title }) => ({
          id,
          images,
          title,
        }));
        this._gifs = value;

        this.saveHistoryGif({
          key: tag,
          value: JSON.stringify(value),
        });

        return value;
      });
  }
}
