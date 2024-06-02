import { Routes } from '@angular/router';
import { AiAssistanceComponent } from './sections/ai-assistance/ai-assistance.component';
import { VideoEditingComponent } from './sections/video-editing/video-editing.component';
import { InstagramPostsComponent } from './sections/instagram-posts/instagram-posts.component';
import { TiktokVideosComponent } from './sections/tiktok-videos/tiktok-videos.component';
import { YoutubeVideosComponent } from './sections/youtube-videos/youtube-videos.component';
import { WhatsappContactComponent } from './sections/whatsapp-contact/whatsapp-contact.component';

export const routes: Routes = [
  { path: 'ai-assistance', component: AiAssistanceComponent },
  { path: 'video-editing', component: VideoEditingComponent },
  { path: 'instagram-posts', component: InstagramPostsComponent },
  { path: 'tiktok-videos', component: TiktokVideosComponent },
  { path: 'youtube-videos', component: YoutubeVideosComponent },
  { path: 'whatsapp-contact', component: WhatsappContactComponent },
  { path: '', redirectTo: '/ai-assistance', pathMatch: 'full' },
  { path: '**', redirectTo: '/ai-assistance' }
];
