import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureWishlistComponent } from './feature-wishlist.component';

describe('FeatureWishlistComponent', () => {
  let component: FeatureWishlistComponent;
  let fixture: ComponentFixture<FeatureWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureWishlistComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
