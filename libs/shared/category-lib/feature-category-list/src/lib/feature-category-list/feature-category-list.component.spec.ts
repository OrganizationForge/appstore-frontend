import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCategoryListComponent } from './feature-category-list.component';

describe('FeatureCategoryListComponent', () => {
  let component: FeatureCategoryListComponent;
  let fixture: ComponentFixture<FeatureCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCategoryListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
