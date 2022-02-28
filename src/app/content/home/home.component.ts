import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  branches: any[] =[]
  error = '';
  constructor(private _ApiService:ApiService,
    private _Router:Router
    ) { }

  ngOnInit(): void {
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
  showBranches(){
    this._ApiService.branches().subscribe(
      (response) => {
        this.branches = response
      }
    )
  }
  onSubmit(reserveForm:FormGroup){
    console.log(reserveForm.value);
    this._ApiService.sendData(reserveForm.value).subscribe(
      (response) => {
        if (response.success) {
          this._Router.navigate(['/thank-you'])
        }else{
          this.error = response.error
        }
        // console.log(response);
      }
    )
  }
}
