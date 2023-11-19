import { v4 } from 'uuid';

export class UuidPlugin {
  uuid() {
    return v4();
  }
}
