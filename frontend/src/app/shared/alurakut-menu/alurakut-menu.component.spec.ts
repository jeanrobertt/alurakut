import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlurakutMenuComponent } from './alurakut-menu.component';

describe('AlurakutMenuComponent', () => {
  let component: AlurakutMenuComponent;
  let fixture: ComponentFixture<AlurakutMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlurakutMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlurakutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
