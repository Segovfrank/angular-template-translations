import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-second-section-three',
  templateUrl: './second-section-three.component.html',
  styleUrls: ['./second-section-three.component.scss']
})
export class SecondSectionThreeComponent implements OnInit {

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
