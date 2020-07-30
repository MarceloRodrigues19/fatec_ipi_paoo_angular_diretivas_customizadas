import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlteraCorFundo]'
})
export class AlteraCorFundoDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { 

  }
  
  @HostListener ('click') alteraCorQuandoClica () {
    this.renderer.setStyle( 
      this.elementRef.nativeElement, 
      'backgroundColor',
      'silver'
      );
      this.renderer.setStyle( 
       this.elementRef.nativeElement, 
       'box-shadow',
       '15px 15px'
      );
  }
}
