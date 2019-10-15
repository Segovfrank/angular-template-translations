import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstSectionComponent } from './first-section/first-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { SecondSectionTwoComponent } from './second-section-two/second-section-two.component';
import { SecondSectionThreeComponent } from './second-section-three/second-section-three.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
