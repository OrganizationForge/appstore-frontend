import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberSliderUiComponent } from './number-slider-ui.component';

describe('NumberSliderUiComponent', () => {
  let component: NumberSliderUiComponent;
  let fixture: ComponentFixture<NumberSliderUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberSliderUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberSliderUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
