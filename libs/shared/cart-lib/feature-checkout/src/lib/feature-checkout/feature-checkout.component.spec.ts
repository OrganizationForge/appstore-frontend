import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCheckoutComponent } from './feature-checkout.component';

describe('FeatureCheckoutComponent', () => {
  let component: FeatureCheckoutComponent;
  let fixture: ComponentFixture<FeatureCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCheckoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
