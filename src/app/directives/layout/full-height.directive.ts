import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[fh]'
})
export class FullHeightDirective implements OnInit {

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.parentNode.style.display = 'flex';
        this.el.nativeElement.parentNode.style.flexFlow = 'row';
    }

}
