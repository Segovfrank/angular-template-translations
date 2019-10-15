import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from '../models/section.model';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss']
})
export class SecondSectionComponent implements OnInit {

  section: Section;
  title = 'Tarros de albañil ligeros';
  description = 'En la tienda puedes encontrar una gran variedad de lámparas y, a veces, inesperadas desde el punto de vista del diseño, lámparas.';
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
    console.log("Showing form");
  }

  submit(formData){
    this.showForm = true;
    this.showFormText = 'Show form';
  }

}
