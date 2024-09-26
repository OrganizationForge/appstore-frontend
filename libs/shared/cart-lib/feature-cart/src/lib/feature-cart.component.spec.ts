import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureCartComponent } from './feature-cart.component';

describe('FeatureCartComponent', () => {
  let component: FeatureCartComponent;
  let fixture: ComponentFixture<FeatureCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
