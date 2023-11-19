import { NgModule } from '@angular/core';
import { MainComponent } from './pages/main-page.component';
import { ListDbzComponent } from './components/list/list.component';
import { FormDbzComponent } from './components/form/form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, ListDbzComponent, FormDbzComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainComponent],
})
export class MainModule {}
