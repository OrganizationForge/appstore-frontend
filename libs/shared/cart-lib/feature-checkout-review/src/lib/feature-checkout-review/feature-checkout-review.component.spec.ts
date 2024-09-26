import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCheckoutReviewComponent } from './feature-checkout-review.component';

describe('FeatureCheckoutReviewComponent', () => {
  let component: FeatureCheckoutReviewComponent;
  let fixture: ComponentFixture<FeatureCheckoutReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCheckoutReviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCheckoutReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
