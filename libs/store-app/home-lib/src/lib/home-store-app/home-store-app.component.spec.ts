import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeStoreAppComponent } from './home-store-app.component';

describe('HomeStoreAppComponent', () => {
  let component: HomeStoreAppComponent;
  let fixture: ComponentFixture<HomeStoreAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeStoreAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeStoreAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
