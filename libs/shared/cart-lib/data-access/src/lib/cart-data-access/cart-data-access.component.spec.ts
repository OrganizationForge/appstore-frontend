import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartDataAccessComponent } from './cart-data-access.component';

describe('CartDataAccessComponent', () => {
  let component: CartDataAccessComponent;
  let fixture: ComponentFixture<CartDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
