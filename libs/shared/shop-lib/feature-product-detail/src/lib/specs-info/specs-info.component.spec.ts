import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecsInfoComponent } from './specs-info.component';

describe('SpecsInfoComponent', () => {
  let component: SpecsInfoComponent;
  let fixture: ComponentFixture<SpecsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecsInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
