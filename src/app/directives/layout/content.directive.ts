import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[content]'
})
export class ContentDirective implements OnInit {

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.style.transition = 'transform 500ms';
        this.el.nativeElement.style.transform = 'translateY(0px)';
        this.el.nativeElement.style.zIndex = -1;
    }
}