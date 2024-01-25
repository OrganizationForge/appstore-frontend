import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterCheckedComponent } from './filter-checked.component';

describe('FilterCheckedComponent', () => {
  let component: FilterCheckedComponent;
  let fixture: ComponentFixture<FilterCheckedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterCheckedComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
