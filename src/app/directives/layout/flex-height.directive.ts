import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[h]'
})
export class FlexHeightDirective implements OnInit {
    @Input('h') h;

    constructor(private el: ElementRef) {

    }

    ngOnInit() {
        this.el.nativeElement.parentNode.style.display = 'flex';
        this.el.nativeElement.style.flex = this.h;
    }

}
