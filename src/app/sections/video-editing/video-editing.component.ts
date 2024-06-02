import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-video-editing',
  templateUrl: './video-editing.component.html',
  styleUrls: ['./video-editing.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class VideoEditingComponent {}
