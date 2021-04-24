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
    this.isVisibleSlide = Array(this.numberOfSlides).fill(false);
    this.initShowSlides(0);
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

  public async loadNext(): Promise<void> {
    await this.showNextSlide();
  }

  public async loadPrev(): Promise<void> {
    await this.showPrevSlide();
  }

  private initShowSlides(index: number): void {
    this.isVisibleSlide[index] = true;
    this.isVisibleSlide[index + 1] = true;
  }

  private async showNextSlide(): Promise<void> {
    const index = await this.slides.getActiveIndex();
    if (index > 1) {
      this.isVisibleSlide[index - 2] = false;
    }
    if (index < this.numberOfSlides - 1) {
      this.isVisibleSlide[index + 1] = true;
    }
  }

  private async showPrevSlide(): Promise<void> {
    const index = await this.slides.getActiveIndex();
    if (index > 0) {
      this.isVisibleSlide[index - 1] = true;
    }
    if (index < this.numberOfSlides - 1) {
      this.isVisibleSlide[index + 1] = false;
    }
  }
}
