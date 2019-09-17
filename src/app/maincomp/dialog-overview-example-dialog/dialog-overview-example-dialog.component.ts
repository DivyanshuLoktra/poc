import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../maincomp.component';
import { BackService } from '../../back.service';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface task {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.scss']
})
export class DialogOverviewExampleDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private backService: BackService,private _snackBar: MatSnackBar) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
  }
  taskType: task[] = [
    {value: 'id1', viewValue: 'Collection'},
    {value: 'id2', viewValue: 'Property Evaluation'},
    {value: 'id3', viewValue: 'Business Development'},
    {value: 'id4', viewValue: 'Personal Discussion'},
    {value: 'id5', viewValue: 'Visit'},
  ];
  formTask:any=[];
  selectBtnClass = 'noDisplay';


  selectTaskType(t)
  {
    console.log("the type of task chosen", t);
    this.selectBtnClass='btnDiv';
    this.backService.taskForms.forEach((e)=>{
      if(e.id == t.value)
      {
        this.formTask = e.schema;
      }
    });
    console.log(this.formTask);

  }

  addTask()
  {
    console.log("added Task");
    this.dialogRef.close();
    this.openSnackBar("Task Added",'Dismiss');
    
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      panelClass: ['blue-snackbar']
    });
  }



}




