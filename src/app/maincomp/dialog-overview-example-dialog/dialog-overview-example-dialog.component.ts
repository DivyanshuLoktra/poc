import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../maincomp.component';
import { BackService } from '../../back.service';

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
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private backService: BackService) { }

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
}




