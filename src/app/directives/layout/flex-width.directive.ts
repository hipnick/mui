import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[w]'
})
export class FlexWidthDirective implements OnInit {
    @Input('w') w;

    constructor(private el: ElementRef) {
    }

    ngOnInit() {
        this.el.nativeElement.parentNode.style.display = 'flex';
        this.el.nativeElement.style.flex = this.w;
    }

}
