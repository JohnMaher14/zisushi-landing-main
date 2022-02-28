import { Pipe, PipeTransform, Renderer2 } from '@angular/core';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {
  constructor( private _Renderer2:Renderer2 ){}
  transform(text:string,elementt:any): any {
    if(text) {
      if (text.charCodeAt(0) > 200) {
        this._Renderer2.setStyle(elementt,'textAlign',"right")
        this._Renderer2.setStyle(elementt,'direction',"rtl")
      } else {
        this._Renderer2.setStyle(elementt,'textAlign',"left")
        this._Renderer2.setStyle(elementt,'direction',"ltr")
      }
      return text;
    }
  }
}
