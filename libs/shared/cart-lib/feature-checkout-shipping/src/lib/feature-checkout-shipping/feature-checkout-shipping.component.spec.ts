import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCheckoutShippingComponent } from './feature-checkout-shipping.component';

describe('FeatureCheckoutShippingComponent', () => {
  let component: FeatureCheckoutShippingComponent;
  let fixture: ComponentFixture<FeatureCheckoutShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCheckoutShippingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCheckoutShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
