import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../../pages/main-page.component';

@Component({
  selector: 'app-list-dbz',
  templateUrl: 'app-list-dbz.component.html',
})
export class ListDbzComponent {
  @Input()
  public charactersList: Characters[] = [];
  @Output()
  public onRemoveCharacter: EventEmitter<string> = new EventEmitter();

  public removerCharacter(id: string): void {
    this.onRemoveCharacter.emit(id);
  }
}
