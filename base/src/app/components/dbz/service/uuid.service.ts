import { Injectable } from '@angular/core';
import { UuidPlugin } from '../../../plugin/uuid-pluging';

@Injectable({
  providedIn: 'root',
})
export class UuidService {
  private uuidPlugin: UuidPlugin = new UuidPlugin();

  public generateUUID(): string {
    return this.uuidPlugin.uuid();
  }
}
