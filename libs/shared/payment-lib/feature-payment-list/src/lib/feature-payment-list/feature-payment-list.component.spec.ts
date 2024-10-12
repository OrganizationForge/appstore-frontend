import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePaymentListComponent } from './feature-payment-list.component';

describe('FeaturePaymentListComponent', () => {
  let component: FeaturePaymentListComponent;
  let fixture: ComponentFixture<FeaturePaymentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePaymentListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
