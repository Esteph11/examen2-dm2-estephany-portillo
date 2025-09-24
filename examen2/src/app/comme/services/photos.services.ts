import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';
import { PhotoDto } from 'src/app/comme/dtos/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private readonly _http = inject(HttpClient);
  private readonly _apiUrl = (environment as any).API_URL ?? '';

  async getPhotos(): Promise<PhotoDto[]> {
    const url = `${this._apiUrl.replace(/\/+$/, '')}/photos`;
    return await firstValueFrom(this._http.get<PhotoDto[]>(url));
  }
}
