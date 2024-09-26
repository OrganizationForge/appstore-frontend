import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureProductListComponent } from './feature-product-list.component';

describe('FeatureProductListComponent', () => {
  let component: FeatureProductListComponent;
  let fixture: ComponentFixture<FeatureProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureProductListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
