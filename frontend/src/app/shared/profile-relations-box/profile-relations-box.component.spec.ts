import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRelationsBoxComponent } from './profile-relations-box.component';

describe('ProfileRelationsBoxComponent', () => {
  let component: ProfileRelationsBoxComponent;
  let fixture: ComponentFixture<ProfileRelationsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRelationsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileRelationsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
