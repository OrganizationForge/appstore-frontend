import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicFormUiComponent } from './dynamic-form-ui.component';

describe('DynamicFormUiComponent', () => {
  let component: DynamicFormUiComponent;
  let fixture: ComponentFixture<DynamicFormUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicFormUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
