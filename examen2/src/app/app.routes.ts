import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'character-firestore', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'character-firestore',
    loadComponent: () => import('./auth/character-firestore/ui/character-firestore.page').then(
      (m) => m.CharacterFirestorePage
    ),
  },
  {
    path: 'comme',
    loadComponent: () => import('./comme/comme.page').then((m) => m.CommePage),
  },
];
