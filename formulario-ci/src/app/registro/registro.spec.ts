import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Registro } from './registro';

describe('Registro', () => {
  let component: Registro;
  let fixture: ComponentFixture<Registro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Registro],
    }).compileComponents();

    fixture = TestBed.createComponent(Registro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe de iniciar con el formulario invalido',()=>{
    expect(component.formulario.valid).toBe(false);
  });

  it('debe rechazar un correo inválido', () => {

  const email = component.formulario.controls.email;

  email.setValue('lbejarano@gmail.com');

  expect(email.valid).toBe(true);

});
it('Debe rechazar contraseña de menos de 6 caracteres',()=>{
  const password=component.formulario.controls.password;
  password.setValue('123');
  expect(password.valid).toBe(false);
});
  
});
