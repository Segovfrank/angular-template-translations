import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from '../models/section.model';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit {

  section: Section;
  title = 'Tienda de luces de casa';
  description = 'La tienda ha estado satisfecha con sus clientes durante más de 15 años con precios bajos y una amplia gama de productos. Entre cientos de tiendas virtuales que venden accesorios, nuestra tienda existe de manera realista. Puede elegir la lámpara necesaria mediante la navegación conveniente en el catálogo de nuestra tienda en línea';
  showForm = true;
  showFormText = 'Show form';

  constructor(private router: Router) {
    this.section = new Section();
    this.section.title = this.title;
    this.section.description = this.description;
  }

  ngOnInit() {

  }

  showFormData(){
    this.showForm = !this.showForm;
    if(!this.showForm){
      this.showFormText = 'Hide form';
    }else{
      this.showFormText = 'Show form';
    }
  }

  submit(formData){
    this.showForm = true;
    this.showFormText = 'Show form';
  }

}
