import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UuidService } from './uuid.service';
import { Characters } from '../pages/main-page.component';

@Injectable({ providedIn: 'root' })
export class DbzService {
  private characters: Characters[] = [];

  constructor(private readonly uuidService: UuidService) {}

  public get getCharacters(): Characters[] {
    return this.characters;
  }

  public addCharacter(character: Omit<Characters, 'id'>): void {
    this.characters.push({
      ...character,
      id: this.uuidService.generateUUID(),
    });
  }

  public removerCharacter(removeId: string): void {
    this.characters = this.characters.filter(({ id }) => id !== removeId);
  }
}
