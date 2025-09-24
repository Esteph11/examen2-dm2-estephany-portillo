import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  where,
  orderBy,
  getDocs,
  CollectionReference
} from '@angular/fire/firestore';
import { CharacterDto } from '../../dtos/character';

@Injectable({ providedIn: 'root' })
export class CharacterService {
  private readonly firestore = inject(Firestore);
  private readonly charactersCollection: CollectionReference = collection(this.firestore, 'characters');

  async getAliveMaleCharacters(): Promise<CharacterDto[]> {
    const q = query(
      this.charactersCollection,
      where('gender', '==', 'Male'),
      where('status', '==', 'Alive'),
      orderBy('created', 'desc')
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => {
      const data = doc.data() as Omit<CharacterDto, 'id'>;
      return { id: doc.id, ...data } as CharacterDto;
    });
  }
}
