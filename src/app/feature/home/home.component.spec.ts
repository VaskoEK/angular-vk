import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [RouterTestingModule.withRoutes([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.get(Router); // TestBed.inject(Router) for Angular 9+

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });




  https://stackoverflow.com/questions/39791773/how-can-i-unit-test-a-component-that-uses-the-router-in-angular

  it('should navigate', () => {
    
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('#buttonForNavOneProd');
    const navigateSpy = spyOn(router, 'navigate');  // router fentebb (11. és 24. sor) definiálva

    button.click();
    expect(navigateSpy).toHaveBeenCalledWith(['/product', '/:id']);

  });
    


});
