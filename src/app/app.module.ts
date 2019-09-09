import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaincompComponent } from './maincomp/maincomp.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path:'main',
    component:MaincompComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaincompComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
