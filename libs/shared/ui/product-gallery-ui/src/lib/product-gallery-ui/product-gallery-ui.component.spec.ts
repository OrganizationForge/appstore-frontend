import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductGalleryUiComponent } from './product-gallery-ui.component';

describe('ProductGalleryUiComponent', () => {
  let component: ProductGalleryUiComponent;
  let fixture: ComponentFixture<ProductGalleryUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGalleryUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductGalleryUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
