import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCheckoutDetailComponent } from './feature-checkout-detail.component';

describe('FeatureCheckoutDetailComponent', () => {
  let component: FeatureCheckoutDetailComponent;
  let fixture: ComponentFixture<FeatureCheckoutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCheckoutDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCheckoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
