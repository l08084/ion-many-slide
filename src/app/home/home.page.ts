import { Component, ViewChild, OnInit } from '@angular/core';
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
export class HomePage implements OnInit {
  @ViewChild('slides') slides: IonSlides;
  // スライドの表示フラグ
  public isVisibleSlide: boolean[];
  // スライドの枚数
  private readonly numberOfSlides = 10;

  constructor() {}

  public ngOnInit(): void {
    this.isVisibleSlide = Array(this.numberOfSlides).fill(false);
  }

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
