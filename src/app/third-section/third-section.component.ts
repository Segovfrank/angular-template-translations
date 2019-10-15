import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from '../models/section.model';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss']
})
export class ThirdSectionComponent implements OnInit {

  section: Section;
  section1: Section;
  section2: Section;

  title1 = 'Luces de la calle';
  description1 = 'Póngase en contacto con nuestro gerente para diseñar su espacio.';
  title2 = 'Instalacion de luces';
  description2 = 'Aumentamos constantemente el surtido, agregamos nuevas colecciones de lámparas y ampliamos el catálogo de nuestros proveedores, al mismo tiempo que siempre mantenemos los precios bajos para las lámparas presentadas.';
  title3 = 'Mantenimiento';
  description3 = '¿Sueñas con encarnar las ideas de diseño más atrevidas? ¿Quiere convertir su casa, oficina o institución en una verdadera obra de arte? Entonces bienvenido.';
  
  showForm = true;
  showFormText = 'Show form 1';
  showForm1 = true;
  showFormText1 = 'Show form 2';
  showForm2 = true;
  showFormText2 = 'Show form 3';

  constructor(private router: Router) {
    this.section = new Section();
    this.section1 = new Section();
    this.section2 = new Section();

    this.section.title = this.title1;
    this.section.description = this.description1;

    this.section1.title = this.title2;
    this.section1.description = this.description2;

    this.section2.title = this.title3;
    this.section2.description = this.description3;
  }

  ngOnInit() {
  }

  showForm1Data(){
    this.showForm = !this.showForm;
    if(!this.showForm){
      this.showFormText = 'Hide form 1';
    }else{
      this.showFormText = 'Show form 1';
    }
  }

  submit1(formData){
    this.showForm = true;
    this.showFormText = 'Show form 1';
  }

  showForm2Data(){
    this.showForm1 = !this.showForm1;
    if(!this.showForm1){
      this.showFormText1 = 'Hide form 2';
    }else{
      this.showFormText1 = 'Show form 2';
    }
  }

  submit2(formData){
    this.showForm1 = true;
    this.showFormText1 = 'Show form 2';
  }

  showForm3Data(){
    this.showForm2 = !this.showForm2;
    if(!this.showForm2){
      this.showFormText2 = 'Hide form 3';
    }else{
      this.showFormText2 = 'Show form 3';
    }
  }

  submit3(formData){
    this.showForm2 = true;
    this.showFormText2 = 'Show form 3';
  }

}
