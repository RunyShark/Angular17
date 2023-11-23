import { Injectable } from '@angular/core';

export interface SetLocalStorage {
  key: string;
  value: any;
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public get(key: string) {
    const values = localStorage.getItem(key);

    return values && JSON.parse(values);
  }

  public deleteByKey(key: string) {
    localStorage.removeItem(key);
  }

  public set({ key, value }: SetLocalStorage) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public clear() {
    localStorage.clear();
  }
}
