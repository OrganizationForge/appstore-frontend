import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCheckoutPaymentComponent } from './feature-checkout-payment.component';

describe('FeatureCheckoutPaymentComponent', () => {
  let component: FeatureCheckoutPaymentComponent;
  let fixture: ComponentFixture<FeatureCheckoutPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCheckoutPaymentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCheckoutPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
