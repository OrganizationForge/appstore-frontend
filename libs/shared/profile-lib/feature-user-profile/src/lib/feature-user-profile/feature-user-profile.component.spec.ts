import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureUserProfileComponent } from './feature-user-profile.component';

describe('FeatureUserProfileComponent', () => {
  let component: FeatureUserProfileComponent;
  let fixture: ComponentFixture<FeatureUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureUserProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
