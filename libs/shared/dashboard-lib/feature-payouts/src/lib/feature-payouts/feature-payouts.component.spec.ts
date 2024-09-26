import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturePayoutsComponent } from './feature-payouts.component';

describe('FeaturePayoutsComponent', () => {
  let component: FeaturePayoutsComponent;
  let fixture: ComponentFixture<FeaturePayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturePayoutsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturePayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
