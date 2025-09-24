import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CharacterService } from 'src/app/auth/character-firestore/services/character.services';
import { CharacterDto } from 'src/app/auth/character-firestore/dtos/character';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonSpinner,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-character-firestore',
  templateUrl: './character-firestore.page.html',
  styleUrls: ['./character-firestore.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSpinner,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonButton,
  ]
})
export class CharacterFirestorePage implements OnInit {
  private readonly _characterService = inject(CharacterService);
  private readonly _router = inject(Router);

  characters: CharacterDto[] = [];
  loading = true;

  async ngOnInit() {
    this.characters = await this._characterService.getAliveMaleCharacters();
    this.loading = false;
  }
  goToComme() {
    this._router.navigate(['/comme']);
  }
}
