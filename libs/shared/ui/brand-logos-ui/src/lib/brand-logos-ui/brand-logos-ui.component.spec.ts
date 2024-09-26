import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandLogosUiComponent } from './brand-logos-ui.component';

describe('BrandLogosUiComponent', () => {
  let component: BrandLogosUiComponent;
  let fixture: ComponentFixture<BrandLogosUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandLogosUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandLogosUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
