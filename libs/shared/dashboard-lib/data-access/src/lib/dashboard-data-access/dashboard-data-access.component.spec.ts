import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardDataAccessComponent } from './dashboard-data-access.component';

describe('DashboardDataAccessComponent', () => {
  let component: DashboardDataAccessComponent;
  let fixture: ComponentFixture<DashboardDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
