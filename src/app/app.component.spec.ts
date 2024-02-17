import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the counter when increase button is clicked', () => {
    const initialCounterValue = component.counter;
    const increaseButton = fixture.nativeElement.querySelector('#increase');
    increaseButton.click();
    expect(component.counter).toBe(initialCounterValue + 1);
  });

  it('should decrease the counter when decrease button is clicked', () => {
    const initialCounterValue = component.counter;
    const decreaseButton = fixture.nativeElement.querySelector('#decrease');
    decreaseButton.click();
    expect(component.counter).toBe(initialCounterValue - 1);
  });
});
