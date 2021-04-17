import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PageOneComponent } from '../slides/page-one/page-one.component';
import { PageTwoComponent } from '../slides/page-two/page-two.component';
import { PageThreeComponent } from '../slides/page-three/page-three.component';
import { PageFourComponent } from '../slides/page-four/page-four.component';
import { PageFiveComponent } from '../slides/page-five/page-five.component';
import { PageSixComponent } from '../slides/page-six/page-six.component';
import { PageSevenComponent } from '../slides/page-seven/page-seven.component';
import { PageEightComponent } from '../slides/page-eight/page-eight.component';
import { PageTenComponent } from '../slides/page-ten/page-ten.component';
import { PageNineComponent } from '../slides/page-nine/page-nine.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    PageFourComponent,
    PageFiveComponent,
    PageSixComponent,
    PageSevenComponent,
    PageEightComponent,
    PageNineComponent,
    PageTenComponent,
  ],
})
export class HomePageModule {}
