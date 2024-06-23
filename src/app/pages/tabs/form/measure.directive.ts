import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appMeasure]'
})
export class MeasureDirective {
  @Output() dimensionsChange = new EventEmitter<{ width: number, height: number }>();

  constructor(private el: ElementRef) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.measure();
  }

  ngAfterViewInit() {
    this.measure();
  }

  measure() {
    const width = this.el.nativeElement.offsetWidth;
    const height = this.el.nativeElement.offsetHeight;
    this.dimensionsChange.emit({ width, height });
  }
}
