import { Component, ContentChildren, ElementRef, EventEmitter, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { fromEvent, of, Subject } from 'rxjs';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  @ViewChild('containerRef') containerRef: ElementRef<HTMLElement>;
  @Input() refreshObs: Subject<boolean>;
  currentSlide = 0;
  slides: HTMLCollection;

  ngAfterViewInit() {
    this.slides = this.containerRef.nativeElement.children;
    this.refreshSlides()

    this.containerRef.nativeElement.childNodes
  }

  refreshSlides() {
    if (this.slides) {
      for (var i = 0; i < this.slides.length; i++) {
        const slide = this.slides[i]

        if (i == this.currentSlide) {
          slide.removeAttribute("hidden")
          continue;
        }

        slide.setAttribute("hidden", "true")
      }
    }
  }

  prev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.refreshSlides();
    }
  }

  next() {
    if (this.currentSlide < this.slides.length - 1) {
      this.currentSlide++;
      this.refreshSlides();
    }
  }

}
