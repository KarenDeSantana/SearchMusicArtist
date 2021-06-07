import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistBlockComponent } from './artist-block.component';

describe('ArtistBlockComponent', () => {
  let component: ArtistBlockComponent;
  let fixture: ComponentFixture<ArtistBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
