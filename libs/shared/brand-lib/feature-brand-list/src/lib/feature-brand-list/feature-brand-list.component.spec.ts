import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureBrandListComponent } from './feature-brand-list.component';

describe('FeatureBrandListComponent', () => {
  let component: FeatureBrandListComponent;
  let fixture: ComponentFixture<FeatureBrandListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureBrandListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureBrandListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
