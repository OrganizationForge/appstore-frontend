import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileDataAccessComponent } from './profile-data-access.component';

describe('ProfileDataAccessComponent', () => {
  let component: ProfileDataAccessComponent;
  let fixture: ComponentFixture<ProfileDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
