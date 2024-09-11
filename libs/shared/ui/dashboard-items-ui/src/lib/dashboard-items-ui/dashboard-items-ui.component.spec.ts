import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardItemsUiComponent } from './dashboard-items-ui.component';

describe('DashboardItemsUiComponent', () => {
  let component: DashboardItemsUiComponent;
  let fixture: ComponentFixture<DashboardItemsUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardItemsUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardItemsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
