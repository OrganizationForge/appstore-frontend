import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureProfileComponent } from './feature-profile.component';

describe('FeatureProfileComponent', () => {
  let component: FeatureProfileComponent;
  let fixture: ComponentFixture<FeatureProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
