import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureShopComponent } from './feature-shop.component';

describe('FeatureShopComponent', () => {
  let component: FeatureShopComponent;
  let fixture: ComponentFixture<FeatureShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureShopComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
