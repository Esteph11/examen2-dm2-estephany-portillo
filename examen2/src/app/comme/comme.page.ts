import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PhotosService } from '../comme/services/photos.services';
import { PhotoDto } from '../comme/dtos/photo';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-comme',
  templateUrl: './comme.page.html',
  styleUrls: ['./comme.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonButton
  ]
})
export class CommePage implements OnInit {
  private readonly _photosService = inject(PhotosService);
  photos: PhotoDto[] = [];
  loading = true;

  async ngOnInit() {
    this.photos = await this._photosService.getPhotos();
    this.loading = false;
  }
}
