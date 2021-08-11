import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputEmail]'
})
export class InputEmailDirective {

  constructor(private element:ElementRef) { }

  @HostListener('focus') onFocus(){
   this.element.nativeElement.classList.add('bg-warning');
   console.log(focus)
  }

  @HostListener('blur') onBlur(){
    this.element.nativeElement.classList.remove('bg-warning');
    console.log(blur);

    let value:string=this.element.nativeElement.value;
    if(!value.includes('@'))
    this.element.nativeElement.value=value.toLocaleLowerCase()+ '@gmail.com';

   }
}
