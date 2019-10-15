import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from '../models/section.model';

@Component({
  selector: 'app-second-section-two',
  templateUrl: './second-section-two.component.html',
  styleUrls: ['./second-section-two.component.scss']
})
export class SecondSectionTwoComponent implements OnInit {

  section: Section;
  title = 'LED Gariand';
  description = 'Lámparas de pared y escritorio de techo clásicas y modernas, exteriores y para ciertas habitaciones, y mucho más.';
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
