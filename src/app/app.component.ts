import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'zisushi-landing';

  show:boolean=true
  currentLang:any
   constructor(private translateService:TranslateService,
     private title:Title) { title.setTitle("Zi sushi | Mother's day") }

   ngOnInit(): void {
     this.currentLang =  localStorage.setItem("currenLanguage", "en")
     this.currentLang = localStorage.getItem("currenLanguage") || "en"
   }
   saveLanguageToLocalStorage(lang:any) {
     if(lang.value=='ar') {
       document.body.classList.add('rtl')
     } else {
       document.body.classList.remove('rtl')
     }
     this.translateService.setDefaultLang(lang.value)
     this.translateService.use(lang.value)
     localStorage.setItem("currenLanguage",lang.value)
     this.currentLang=lang.value
     this.show=true
  }
}
