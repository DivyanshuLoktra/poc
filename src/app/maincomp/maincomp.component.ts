import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogOverviewExampleDialogComponent} from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';


export interface DialogData {
  animal: string;
  name: string;
}



@Component({
  selector: 'app-maincomp',
  templateUrl: './maincomp.component.html',
  styleUrls: ['./maincomp.component.scss']
})
export class MaincompComponent implements OnInit {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }
  sideBarClass = 'nothing';
  mainClass='col-lg-12 col-md-12 col-sm-12 col-xs-12 mainBar'
  ulClass='noDisplay';

  filterClass='noDisplay';
  tableClass='tablePart';
  isChecked:boolean=false;

  

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

  //Function to handle the toggle of filter
  onToggleFilter(e)
  {

    console.log("Value of Checked in", this.isChecked);
    if(!this.isChecked)
    {
      this.filterClass = 'noDisplay';
    }
    else
    {
      this.filterClass='filterPart';
      //this.tableClass='noDisplay';
    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '1000px',
      data: {name: this.name, animal: this.animal},
      
    });

    dialogRef.afterClosed().subscribe(result => {
      this.animal = result;
    });
  }


  
 


}
