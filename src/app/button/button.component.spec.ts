import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('value changes from false to true', fakeAsync(() => {

    const button = fixture.nativeElement.querySelector('button');
    expect(component.isClicked).toBe(false);
    button.click();
    expect(component.isClicked).toBe(true);

    expect(component.responseReceived).toBe(false);
    button.click();
    tick(6000);  // megvárja a tesztkörnyezet a 6 mp-et, és utána nézi meg a változó értékét lentebb:
    expect(component.responseReceived).toBe(true);

  }));
});
