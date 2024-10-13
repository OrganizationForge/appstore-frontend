import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureShopListLsComponent } from './feature-shop-list-ls.component';

describe('FeatureShopListLsComponent', () => {
  let component: FeatureShopListLsComponent;
  let fixture: ComponentFixture<FeatureShopListLsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureShopListLsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureShopListLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
