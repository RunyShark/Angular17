import { Component } from '@angular/core';
import { DbzService } from '../service/dbz.service';

export interface Characters {
  id: string;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainComponent {
  constructor(private readonly dbzService: DbzService) {}

  public characters(): Characters[] {
    return this.dbzService.getCharacters;
  }

  public onNewCharacter(character: Omit<Characters, 'id'>): void {
    this.dbzService.addCharacter(character);
  }

  public removerCharacter(removeId: string): void {
    this.dbzService.removerCharacter(removeId);
  }
}
