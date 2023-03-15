import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommunitiesComponent } from './main-communities.component';

describe('MainCommunitiesComponent', () => {
  let component: MainCommunitiesComponent;
  let fixture: ComponentFixture<MainCommunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCommunitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
