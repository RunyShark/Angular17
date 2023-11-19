import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Characters } from '../../pages/main-page.component';

const initialStateCharacter: Omit<Characters, 'id'> = {
  name: '',
  power: 0,
};

const initialStateFormError = {
  name: false,
};

@Component({
  selector: 'app-form-dbz',
  templateUrl: 'app-form-dbz.component.html',
})
export class FormDbzComponent {
  public character: Omit<Characters, 'id'> = { ...initialStateCharacter };
  public errorForm = { ...initialStateFormError };

  @Output()
  public onNewCharacter: EventEmitter<Omit<Characters, 'id'>> =
    new EventEmitter();

  public emitCharacter() {
    console.log(this.character);
    if (this.character.name.trim().length < 0) {
      this.errorForm.name = true;
      return;
    }

    this.errorForm = { ...initialStateFormError };

    this.onNewCharacter.emit(this.character);

    this.character = { ...initialStateCharacter };
  }
}
