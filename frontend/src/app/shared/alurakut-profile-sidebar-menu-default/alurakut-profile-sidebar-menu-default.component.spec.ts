import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlurakutProfileSidebarMenuDefaultComponent } from './alurakut-profile-sidebar-menu-default.component';

describe('AlurakutProfileSidebarMenuDefaultComponent', () => {
  let component: AlurakutProfileSidebarMenuDefaultComponent;
  let fixture: ComponentFixture<AlurakutProfileSidebarMenuDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlurakutProfileSidebarMenuDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlurakutProfileSidebarMenuDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
