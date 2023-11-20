import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../../../core/components/gifs/service/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  constructor(private readonly gifsService: GifsService) {}

  getTagsHistory(): string[] {
    return this.gifsService.geTagsHistory;
  }
}
