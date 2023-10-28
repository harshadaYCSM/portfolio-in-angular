import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(private viewportScroller: ViewportScroller) { }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      console.log(`Scrolling to element with id: ${elementId}`);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
