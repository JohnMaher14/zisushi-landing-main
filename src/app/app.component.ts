import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  // title = 'zisushi-landing';
  currentLanguage:any
  show:boolean=true;
  currentLang:any;
   constructor(public _TranslateService:TranslateService){
     this.currentLang = localStorage.getItem("currentLanguage") || 'en'
     this._TranslateService.use(this.currentLang)
   }

   ngOnInit(): void {
    this._TranslateService.onLangChange.subscribe(
      () => {
        this.currentLanguage = this._TranslateService.currentLang
      }
    )
   }
   ngDoCheck(): void {
     //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
     //Add 'implements DoCheck' to the class.

   }

   showcurrentLanguage(language:any){
    this._TranslateService.use(language);
    localStorage.setItem("currentLanguage",language)
    }
}
