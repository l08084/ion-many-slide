import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides') slides: IonSlides;

  constructor() {}

  public swipeNext(): void {
    this.slides.slideNext();
  }

  public swipePrev(): void {
    this.slides.slidePrev();
  }
}
