import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrkutIconSetComponent } from './orkut-icon-set.component';

describe('OrkutIconSetComponent', () => {
  let component: OrkutIconSetComponent;
  let fixture: ComponentFixture<OrkutIconSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrkutIconSetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrkutIconSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
