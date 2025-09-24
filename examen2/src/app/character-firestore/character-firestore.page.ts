import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-character-firestore',
  templateUrl: './character-firestore.page.html',
  styleUrls: ['./character-firestore.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CharacterFirestorePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
