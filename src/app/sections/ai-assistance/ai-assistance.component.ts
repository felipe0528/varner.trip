import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-ai-assistance',
  templateUrl: './ai-assistance.component.html',
  styleUrls: ['./ai-assistance.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class AiAssistanceComponent {}