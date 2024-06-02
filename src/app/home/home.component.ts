import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiAssistanceComponent } from '../sections/ai-assistance/ai-assistance.component';
import { VideoEditingComponent } from '../sections/video-editing/video-editing.component';
import { InstagramPostsComponent } from '../sections/instagram-posts/instagram-posts.component';
import { TiktokVideosComponent } from '../sections/tiktok-videos/tiktok-videos.component';
import { YoutubeVideosComponent } from '../sections/youtube-videos/youtube-videos.component';
import { WhatsappContactComponent } from '../sections/whatsapp-contact/whatsapp-contact.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    AiAssistanceComponent,
    VideoEditingComponent,
    InstagramPostsComponent,
    TiktokVideosComponent,
    YoutubeVideosComponent,
    WhatsappContactComponent
  ]
})
export class HomeComponent {}
