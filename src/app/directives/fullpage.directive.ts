import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
	selector: '[appFullpage]'
})

export class FullpageDirective {

	constructor(private element: ElementRef) {}


	resize() {
		// get original dimensions
		let bgWidth = this.element.nativeElement.width;
		let bgHeight = this.element.nativeElement.height;

		// get window dimensions
		let winWidth = window.innerWidth;
		let winHeight = window.innerHeight;

		// calculate ratio
		let widthRatio = winWidth / bgWidth;
		let heightRatio = winHeight / bgHeight;

		let widthDiff = heightRatio * bgWidth;
		let heightDiff = widthRatio * bgHeight;

		if (heightDiff > winHeight) {
			this.element.nativeElement.width = winWidth;
			this.element.nativeElement.height = heightDiff;
		} else {
			this.element.nativeElement.width = widthDiff;
			this.element.nativeElement.height = winHeight;
		}
	}
}