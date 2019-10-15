import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Section } from '../models/section.model';

@Component({
  selector: 'app-second-section-three',
  templateUrl: './second-section-three.component.html',
  styleUrls: ['./second-section-three.component.scss']
})
export class SecondSectionThreeComponent implements OnInit {

  section: Section;
  title = 'Lamparas raras';
  description = 'Podemos ofrecer candelabros, lámparas de techo y pared, apliques, luces y lámparas de pie, lámparas para niños.';
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
