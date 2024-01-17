import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureShopGridLsComponent } from './feature-shop-grid-ls.component';

describe('FeatureShopGridLsComponent', () => {
  let component: FeatureShopGridLsComponent;
  let fixture: ComponentFixture<FeatureShopGridLsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureShopGridLsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureShopGridLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
