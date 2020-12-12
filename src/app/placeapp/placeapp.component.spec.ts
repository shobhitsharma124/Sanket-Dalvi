import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceappComponent } from './placeapp.component';

describe('PlaceappComponent', () => {
  let component: PlaceappComponent;
  let fixture: ComponentFixture<PlaceappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
