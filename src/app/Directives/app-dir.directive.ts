import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDir]'
})
export class AppDirDirective {

  constructor(
    private _ElementRef: ElementRef,
    private _Renderer2: Renderer2
    ) { 
    }

    @Input() set appDir(value: string) { 
      if (value === 'rtl')
      this._Renderer2.setAttribute(this._ElementRef.nativeElement, 'dir', 'rtl')
    else 
    this._Renderer2.setAttribute(this._ElementRef.nativeElement, 'dir', 'ltr')
    }


}
