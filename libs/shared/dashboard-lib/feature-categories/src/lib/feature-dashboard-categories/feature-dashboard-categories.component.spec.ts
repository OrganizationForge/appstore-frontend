import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureDashboardCategoriesComponent } from './feature-dashboard-categories.component';

describe('FeatureDashboardCategoriesComponent', () => {
  let component: FeatureDashboardCategoriesComponent;
  let fixture: ComponentFixture<FeatureDashboardCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureDashboardCategoriesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureDashboardCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
