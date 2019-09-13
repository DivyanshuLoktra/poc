import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaincompComponent } from './maincomp/maincomp.component';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './auth.service';
import { PartnerComponent } from './maincomp/partner/partner.component';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FilterComponent} from './maincomp/filter/filter.component';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule,MatNativeDateModule } from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {DialogOverviewExampleDialogComponent} from './maincomp/dialog-overview-example-dialog/dialog-overview-example-dialog.component';

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
    //canActivate:[AuthService],
    component:MaincompComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MaincompComponent,
    PartnerComponent,
    FilterComponent,
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,MatMenuModule,MatSlideToggleModule,MatInputModule,MatDatepickerModule,MatNativeDateModule,
    MatAutocompleteModule,MatSortModule,MatDialogModule,MatSelectModule
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  providers: [MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
