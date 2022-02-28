import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component';
import { ThankyouComponent } from './content/thankyou/thankyou.component';
import { NotfoundComponent } from './content/notfound/notfound.component';
import { ContactComponent } from './content/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { LangPipe } from './shared/lang.pipe';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import ar from '@angular/common/locales/ar';

import en from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
registerLocaleData(ar)
registerLocaleData(en)
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThankyouComponent,
    NotfoundComponent,
    ContactComponent,
    LangPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
