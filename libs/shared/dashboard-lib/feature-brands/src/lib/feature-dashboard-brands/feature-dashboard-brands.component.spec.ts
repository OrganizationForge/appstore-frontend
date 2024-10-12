import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDashboardBrandsComponent } from './feature-dashboard-brands.component';

describe('FeatureDashboardBrandsComponent', () => {
  let component: FeatureDashboardBrandsComponent;
  let fixture: ComponentFixture<FeatureDashboardBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDashboardBrandsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDashboardBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
