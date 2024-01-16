import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureProductDetailComponent } from './feature-product-detail.component';

describe('FeatureProductDetailComponent', () => {
  let component: FeatureProductDetailComponent;
  let fixture: ComponentFixture<FeatureProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureProductDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
