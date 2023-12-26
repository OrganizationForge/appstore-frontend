import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookDataAccessComponent } from './book-data-access.component';

describe('BookDataAccessComponent', () => {
  let component: BookDataAccessComponent;
  let fixture: ComponentFixture<BookDataAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDataAccessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BookDataAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
