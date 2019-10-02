import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParrafoComponent } from './parrafo/parrafo.component';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { SecondSectionTwoComponent } from './second-section-two/second-section-two.component';
import { SecondSectionThreeComponent } from './second-section-three/second-section-three.component';
import { SecondSectionWrapComponent } from './second-section-wrap/second-section-wrap.component';

@NgModule({
  declarations: [
    AppComponent,
    ParrafoComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    SecondSectionTwoComponent,
    SecondSectionThreeComponent,
    SecondSectionWrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
