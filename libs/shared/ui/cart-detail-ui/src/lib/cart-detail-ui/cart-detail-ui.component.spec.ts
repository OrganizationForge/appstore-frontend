import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartDetailUiComponent } from './cart-detail-ui.component';

describe('CartDetailUiComponent', () => {
  let component: CartDetailUiComponent;
  let fixture: ComponentFixture<CartDetailUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDetailUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartDetailUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
