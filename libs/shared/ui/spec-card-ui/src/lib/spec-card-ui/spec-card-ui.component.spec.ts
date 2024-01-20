import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecCardUiComponent } from './spec-card-ui.component';

describe('SpecCardUiComponent', () => {
  let component: SpecCardUiComponent;
  let fixture: ComponentFixture<SpecCardUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecCardUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecCardUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
