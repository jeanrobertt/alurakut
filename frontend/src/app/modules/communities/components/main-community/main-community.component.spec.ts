import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommunityComponent } from './main-community.component';

describe('MainCommunityComponent', () => {
  let component: MainCommunityComponent;
  let fixture: ComponentFixture<MainCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCommunityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
