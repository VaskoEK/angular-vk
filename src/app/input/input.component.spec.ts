import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();  // megnézi, h a komp. létrejöttével az üres fehér html laphoz képest milyen változások történtek
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input component name property update', ()=>{

    const input = fixture.nativeElement.querySelector('input');  // kiválasztjuk az input elemet, az elsőt fogja kiv.
    const event = new Event('input');  // megnézi, h inputon változott-e vmi
    input.value = 'Sándor';  // új értéket adunk az inputnak
    input.dispatchEvent(event);  // inputon nyomjon egy entert a rendszer
    expect(component.name).toEqual('Sándor')  // eldönti, h igaz v hamis lesz-e a tesztesetünk
    // p tagbe kiíródik-e rendesen az input szövege:
    const output = fixture.nativeElement.querySelector('#outputName');
    fixture.detectChanges();  // html részen vmi változott-e (jelen esetben a p tag)
    expect(output.textContent).toContain('Sándor');

  });

});
