import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureSalesComponent } from './feature-sales.component';

describe('FeatureSalesComponent', () => {
  let component: FeatureSalesComponent;
  let fixture: ComponentFixture<FeatureSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSalesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
