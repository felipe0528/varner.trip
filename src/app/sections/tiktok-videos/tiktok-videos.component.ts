import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tiktok-videos',
  templateUrl: './tiktok-videos.component.html',
  styleUrls: ['./tiktok-videos.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class TiktokVideosComponent implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }
}
