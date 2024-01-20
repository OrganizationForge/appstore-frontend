import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureSettingsComponent } from './feature-settings.component';

describe('FeatureSettingsComponent', () => {
  let component: FeatureSettingsComponent;
  let fixture: ComponentFixture<FeatureSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSettingsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
