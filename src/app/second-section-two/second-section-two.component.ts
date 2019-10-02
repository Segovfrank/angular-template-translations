import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-second-section-two',
  templateUrl: './second-section-two.component.html',
  styleUrls: ['./second-section-two.component.scss']
})
export class SecondSectionTwoComponent implements OnInit {

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
