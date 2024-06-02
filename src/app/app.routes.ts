import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QrRedirectComponent } from './pages/qr-redirect/qr-redirect.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'qr', component: QrRedirectComponent },
    { path: '**', redirectTo: '' }
];
