import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlurakutProfileSidebarComponent } from './alurakut-profile-sidebar.component';

describe('AlurakutProfileSidebarComponent', () => {
  let component: AlurakutProfileSidebarComponent;
  let fixture: ComponentFixture<AlurakutProfileSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlurakutProfileSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlurakutProfileSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
