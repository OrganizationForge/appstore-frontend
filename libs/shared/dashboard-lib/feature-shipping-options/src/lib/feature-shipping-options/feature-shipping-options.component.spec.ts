import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureShippingOptionsComponent } from './feature-shipping-options.component';

describe('FeatureShippingOptionsComponent', () => {
  let component: FeatureShippingOptionsComponent;
  let fixture: ComponentFixture<FeatureShippingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureShippingOptionsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureShippingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
