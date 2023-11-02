import { Injectable } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ScrollService {
  constructor(private viewportScroller: ViewportScroller) { }

  /**
   * Scrolls to the specified HTML element within the viewport with smooth animation.
   *
   * @param elementId - The ID of the HTML element to scroll to.
   */
  scrollToElement(elementId: string): void {
    // Find the HTML element by its ID
    const element = document.getElementById(elementId);

    if (element) {
      console.log(`Scrolling to element with ID: ${elementId}`);

      // Scroll the element into view with smooth behavior
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
