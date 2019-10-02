import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss']
})
export class ThirdSectionComponent implements OnInit {

  public lenguaje = 'es';
  

  constructor(private translate: TranslateService) {
      this.translate.setDefaultLang(this.lenguaje);
   }

  ngOnInit() {
    
  }

  public cambiarLenguaje(lang){
      this.lenguaje = lang;
      this.translate.use(lang);
  }


}
