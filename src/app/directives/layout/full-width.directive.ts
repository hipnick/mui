import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[fw]'
})
export class FullWidthDirective implements OnInit {

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.parentNode.style.display = 'flex';
        this.el.nativeElement.parentNode.style.flexFlow = 'column';
    }

}
