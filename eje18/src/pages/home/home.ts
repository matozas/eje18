import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WelcomePage } from "../welcome/welcome";
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
//importamos clases

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre;
  email;
  telefono;
  comentario;
  toggleStatus;

  //2-creamos instancias de form group   y de abstract control encargados de administrar reglas
  formGroup: FormGroup;
  Nname: AbstractControl;
  Nemail: AbstractControl;
  Ntel: AbstractControl;
  Ncom: AbstractControl;


  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder
  ) {//3-instancia form builde sirve para construir el form group
    this.formGroup = formBuilder.group({
      Nname: ['', Validators.required], //4-validaciones
      Nemail: ['', Validators.compose([Validators.maxLength(70),
      Validators.pattern('^ [_ A-Za-z0-9 - \\ +] + (\\ [_ A-Za-z0-9. -] +) * @ [A-Za-z0-9 -] + (\\. [A-Za-z0-9] +) * (\\. [A-Za-z] {2,}) $ '), Validators.required])],
      Ntel:['',Validators.required],
      Ncom:['',Validators.required]
    
      //Nemail:[ 
    });
    //5-enlace para validacion y pasar al homehtml
    this.Nname = this.formGroup.contains['Nname'];
    this.Nemail = this.formGroup.contains['Nemail'];
    this.Ntel = this.formGroup.contains['Ntel'];
    this.Ncom = this.formGroup.contains['Ncom'];
  }

  gotoWelcome() {
    if (this.toggleStatus == true) {
      let data = {
        nombre: this.nombre,
        email: this.email,
        telefono: this.telefono,
        comentario: this.comentario,
        Nname: this.Nname,
        Nemail: this.Nemail,
        Ntel: this.Ntel,
        Ncom: this.Ncom
      };
      this.navCtrl.push(WelcomePage, data);
    }
    else {
      alert("Debe aceptar los términos y condiciones...");
    }
  }

}
