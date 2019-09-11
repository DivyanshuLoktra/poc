import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.scss']
})
export class MaincompComponent implements OnInit {

  constructor() { }
  sideBarClass = 'nothing';
  mainClass='col-lg-12 col-md-12 col-sm-12 col-xs-12 mainBar'
  ulClass='noDisplay';

  ngOnInit() {
   
  }

  onShowMenu()
  {
    console.log("Menu shown")
    if(this.sideBarClass == 'col-lg-2 col-md-2 col-sm-2 col-xs-2 sideBar')
    {
    this.sideBarClass = 'nothing';
    this.mainClass = 'col-lg-12 col-md-12 col-sm-12 col-xs-12 mainBar';
    this.ulClass='noDisplay';
    }
    else
    {
      this.sideBarClass='col-lg-2 col-md-2 col-sm-2 col-xs-2 sideBar';
      this.mainClass='col-lg-10 col-md-10 col-sm-10 col-xs-10 mainBar';
      this.ulClass='ulClassMain';
    }
  }



}
