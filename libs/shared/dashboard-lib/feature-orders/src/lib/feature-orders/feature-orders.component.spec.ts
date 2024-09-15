import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureOrdersComponent } from './feature-orders.component';

describe('FeatureOrdersComponent', () => {
  let component: FeatureOrdersComponent;
  let fixture: ComponentFixture<FeatureOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureOrdersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
