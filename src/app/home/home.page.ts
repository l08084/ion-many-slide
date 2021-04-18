import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

/**
 * スライドを10枚表示する画面
 *
 * @export
 * @class HomePage
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slides') slides: IonSlides;

  constructor() {}

  /**
   * 次のスライドに進む
   *
   * @memberof HomePage
   */
  public swipeNext(): void {
    this.slides.slideNext();
  }

  /**
   * 前のスライドに戻る
   *
   * @memberof HomePage
   */
  public swipePrev(): void {
    this.slides.slidePrev();
  }
}
