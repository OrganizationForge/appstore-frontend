import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureShippingListComponent } from './feature-shipping-list.component';

describe('FeatureShippingListComponent', () => {
  let component: FeatureShippingListComponent;
  let fixture: ComponentFixture<FeatureShippingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureShippingListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureShippingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
