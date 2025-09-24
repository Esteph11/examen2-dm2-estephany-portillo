import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterFirestorePage } from './character-firestore.page';

describe('CharacterFirestorePage', () => {
  let component: CharacterFirestorePage;
  let fixture: ComponentFixture<CharacterFirestorePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFirestorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
