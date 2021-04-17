import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PageOneComponent } from '../slides/page-one/page-one.component';
import { PageTwoComponent } from '../slides/page-two/page-two.component';
import { PageThreeComponent } from '../slides/page-three/page-three.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [
    HomePage,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
  ],
})
export class HomePageModule {}
