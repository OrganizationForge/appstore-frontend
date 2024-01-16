import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrendingUiComponent } from './trending-ui.component';

describe('TrendingUiComponent', () => {
  let component: TrendingUiComponent;
  let fixture: ComponentFixture<TrendingUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TrendingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
