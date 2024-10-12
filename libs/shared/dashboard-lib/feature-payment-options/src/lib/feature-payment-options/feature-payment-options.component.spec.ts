import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePaymentOptionsComponent } from './feature-payment-options.component';

describe('FeaturePaymentOptionsComponent', () => {
  let component: FeaturePaymentOptionsComponent;
  let fixture: ComponentFixture<FeaturePaymentOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePaymentOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePaymentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
