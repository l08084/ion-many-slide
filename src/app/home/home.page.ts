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

  public async ngOnInit(): Promise<void> {
    // 全てのスライドを非表示にする
    this.isVisibleSlide = Array(this.numberOfSlides).fill(false);
    this.initShowSlides();
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

  /**
   * スライドを進んだ時に呼び出される
   *
   * @returns {Promise<void>}
   * @memberof HomePage
   */
  public async loadNext(): Promise<void> {
    await this.showNextSlide();
  }

  /**
   * スライドを戻った時に呼び出される
   *
   * @returns {Promise<void>}
   * @memberof HomePage
   */
  public async loadPrev(): Promise<void> {
    await this.showPrevSlide();
  }

  /**
   * 初期処理として1番目と2番目のスライドを表示する
   *
   * @private
   * @memberof HomePage
   */
  private initShowSlides(): void {
    this.isVisibleSlide[0] = true;
    this.isVisibleSlide[1] = true;
  }

  /**
   * 前方向のスライド移動に伴い、スライドの表示・非表示を切り替える。
   *
   * @private
   * @returns {Promise<void>}
   * @memberof HomePage
   */
  private async showNextSlide(): Promise<void> {
    const index = await this.slides.getActiveIndex();
    if (index > 1) {
      this.isVisibleSlide[index - 2] = false;
    }
    if (index < this.numberOfSlides - 1) {
      this.isVisibleSlide[index + 1] = true;
    }
  }

  /**
   * 後ろ方向のスライド移動に伴い、スライドの表示・非表示を切り替える。
   *
   * @private
   * @returns {Promise<void>}
   * @memberof HomePage
   */
  private async showPrevSlide(): Promise<void> {
    const index = await this.slides.getActiveIndex();
    if (index > 0) {
      this.isVisibleSlide[index - 1] = true;
    }
    if (index < this.numberOfSlides - 2) {
      this.isVisibleSlide[index + 2] = false;
    }
  }
}
