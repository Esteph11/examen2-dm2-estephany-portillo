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
  private readonly photosService = inject(PhotosService);  // ✅ solo esto
  photos: PhotoDto[] = [];
  loading = true;

  async ngOnInit() {
    this.loadPhotos();
  }

  private async loadPhotos() {
    try {
      this.photos = await this.photosService.getPhotos();
      this.loading = false;
    } catch (err) {
      console.error('Error cargando fotos', err);
    }
  }
}
