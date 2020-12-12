import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsideComponent } from './headside.component';

describe('HeadsideComponent', () => {
  let component: HeadsideComponent;
  let fixture: ComponentFixture<HeadsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
