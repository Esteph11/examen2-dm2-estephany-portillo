import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'character-firestore',
    loadComponent: () => import('./character-firestore/character-firestore.page').then( m => m.CharacterFirestorePage)
  },
];
