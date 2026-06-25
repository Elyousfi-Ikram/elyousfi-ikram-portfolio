import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FlyerComponent } from './flyer/flyer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tarifs', component: FlyerComponent },
  { path: '**', redirectTo: '' }
];
