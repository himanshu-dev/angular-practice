import {
  Directive, ElementRef, HostBinding,
  HostListener, Input, OnInit, Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') bgColor;
  @Input() elBgColorDefault: string;
  @Input() elBgColorHighlight: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.bgColor = this.elBgColorDefault;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.renderer.setStyle(this.elRef  .nativeElement, 'color', 'skyblue');
  }

  @HostListener('mouseenter') mouseenter(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.bgColor = 'blue';
    this.bgColor = this.elBgColorHighlight;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'unset');
    // this.bgColor = 'unset';
    this.bgColor = this.elBgColorDefault;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'skyblue');
  }

}
