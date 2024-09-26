import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderSummaryUiComponent } from './order-summary-ui.component';

describe('OrderSummaryUiComponent', () => {
  let component: OrderSummaryUiComponent;
  let fixture: ComponentFixture<OrderSummaryUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSummaryUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderSummaryUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
