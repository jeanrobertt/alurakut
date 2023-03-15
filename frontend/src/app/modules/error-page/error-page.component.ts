import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit{
  errorCode?: number;
  errorMessage?: string
  constructor(private router: Router, private _location: Location){}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.errorCode = navigation.extras.state['errorCode']
      this.errorMessage = navigation.extras.state['errorMessage']
    }
  }

  back() {
    this._location.back()
  }
}
