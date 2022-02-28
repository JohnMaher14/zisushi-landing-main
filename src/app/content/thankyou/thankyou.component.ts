import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor(private title:Title) { title.setTitle("Zi sushi | Mother's day | Thank you") }

  ngOnInit(): void {
  }

}
