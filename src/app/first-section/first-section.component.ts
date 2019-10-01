import { Component, OnInit, Input } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit {

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
