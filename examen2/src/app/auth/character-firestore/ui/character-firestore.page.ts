import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CharacterService } from 'src/app/auth/character-firestore/services/character.services';
import { CharacterDto } from 'src/app/auth/character-firestore/dtos/character';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-character-firestore',
  templateUrl: './character-firestore.page.html',
  styleUrls: ['./character-firestore.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    IonicModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule]
})
export class CharacterFirestorePage implements OnInit {
  private readonly _characterService = inject(CharacterService);
  characters: CharacterDto[] = [];
  loading = true;

  async ngOnInit() {
    this.characters = await this._characterService.getAliveMaleCharacters();
    this.loading = false;
  }
}