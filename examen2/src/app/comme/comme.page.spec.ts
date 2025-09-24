import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommePage } from './comme.page';

describe('CommePage', () => {
  let component: CommePage;
  let fixture: ComponentFixture<CommePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CommePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
