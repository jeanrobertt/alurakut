import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridBoxComponent } from './grid-box.component';

describe('GridBoxComponent', () => {
  let component: GridBoxComponent;
  let fixture: ComponentFixture<GridBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
