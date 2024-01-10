import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AutorDataAccessComponent } from './autor-data-access.component';

describe('AutorDataAccessComponent', () => {
  let component: AutorDataAccessComponent;
  let fixture: ComponentFixture<AutorDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutorDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
