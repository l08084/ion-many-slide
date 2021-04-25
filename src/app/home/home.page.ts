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
  private visibleSlidesCallbackInterbal: any;

  constructor() {}

  public async ngOnInit(): Promise<void> {
    // 全てのスライドを非表示にする
    this.isVisibleSlide = Array(this.numberOfSlides).fill(false);
    this.lazyLodingSlides();
  }

  public ngOnDestroy(): void {
    clearInterval(this.visibleSlidesCallbackInterbal);
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

  private lazyLodingSlides(): void {
    this.isVisibleSlide[0] = true;
    this.isVisibleSlide[1] = true;
    let counter = 2;
    this.visibleSlidesCallbackInterbal = setInterval(() => {});
  }
}
