import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  branches: any[] =[]
  currentLanguage:any;
  thankyou = false;
  error = '';
  currentLang: any;
  constructor(private _ApiService:ApiService,
    private _Router:Router,
    private _Title:Title,
    public _TranslateService:TranslateService
    ) {
      this.currentLang = localStorage.getItem("currentLanguage") || 'en'
      this._TranslateService.use(this.currentLang)
    }

    ngOnInit(): void {
    this._Title.setTitle("Zi sushi | Mother's day | Home")
    this._TranslateService.onLangChange.subscribe(
      () => {
        this.currentLanguage = this._TranslateService.currentLang
      }
    )
    this.showBranches()
  }
  reserveForm = new FormGroup({
    'name': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.required , Validators.email , Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    'phone': new FormControl('', [Validators.required , Validators.pattern(/^((\\+91-?)|0)?[0-9]{10}$/)]),
    'mother_name': new FormControl('', [Validators.required]),
    'address': new FormControl('',Validators.required),
    'branch_name': new FormControl('',Validators.required),
    'order_id': new FormControl('',Validators.required)

  })
  showcurrentLanguage(language:any){
    this._TranslateService.use(language);
    localStorage.setItem("currentLanguage",language)
    }
  showBranches(){
    this._ApiService.branches().subscribe(
      (response) => {
        this.branches = response
      }
    )
  }
  onSubmit(reserveForm:FormGroup){
    this._ApiService.sendData(reserveForm.value).subscribe(
      (response) => {
        if (response.success) {
          this.thankyou = true
        }else{
          if (this.currentLanguage === 'en') {
            this.error = response.error

          }else if(this.currentLanguage === 'ar'){

            this.error = response.ar_error
          }
        }
        // console.log(response);
      }
    )
  }

}
