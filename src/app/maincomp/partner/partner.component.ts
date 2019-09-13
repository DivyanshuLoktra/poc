import { Component, OnInit } from '@angular/core';
import {BackService} from '../../back.service';
import {Sort} from '@angular/material/sort';
 
export interface PeriodicElement {
  task_type: string;
  customer_name: string;
  created_on: number;
  status: string;
  added_by:string;
  agent_assigned:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {customer_name: 'Ganesh', task_type: 'Business Developement', created_on: 9.0122, status: 'Pending',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Gajendra', task_type: 'Personal Discussion', created_on: 10.811, status: 'Success',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Hitesh', task_type: 'Visit', created_on: 12.0107, status: 'Failed',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Hero', task_type: 'Collection', created_on: 14.0067, status: 'Follow Up',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Ink', task_type: 'Property Evaluation', created_on: 15.9994, status: 'Pending',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Ian', task_type: 'Business Development', created_on: 18.9984, status: 'Success',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Jacob', task_type: 'Personal Discussion', created_on: 1.0079, status: 'Success',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Anuj', task_type: 'Collection', created_on: 1.0079, status: 'Success',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Ajay', task_type: 'Property Evaluation', created_on: 4.0026, status: 'Failed',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Binay', task_type: 'Business Development', created_on: 6.941, status: 'Follow Up',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Bunty', task_type: 'Personal Discussion', created_on: 9.0122, status: 'Pending',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Chetan', task_type: 'Visit', created_on: 10.811, status: 'Success',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Chavan', task_type: 'Collection', created_on: 12.0107, status: 'Failed',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Don', task_type: 'Property Evaluation', created_on: 14.0067, status: 'Follow Up',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Devendra', task_type: 'Business Developement', created_on: 15.9994, status: 'Pending',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Eglesias', task_type: 'Personal Discussion', created_on: 18.9984, status: 'Success',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Enigma', task_type: 'Visit', created_on: 20.1797, status: 'Follow Up',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Funk', task_type: 'Collection', created_on: 4.0026, status: 'Failed',added_by:'FOS',agent_assigned:'Testing'},
  {customer_name: 'Fanthom', task_type: 'Property Evaluation', created_on: 6.941, status: 'Follow Up',added_by:'FOS',agent_assigned:'Testing'}
  
];
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})


export class PartnerComponent implements OnInit {
  sortedData: PeriodicElement[];


  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['customer_name', 'task_type', 'created_on', 'status','added_by','agent_assigned'];
  displayedColumnsObj=[
    {
      id:'customer_name',
      label:'Customer Name'
    },{
      id:'task_type',
      label:'Task Type'
    },{
      id:'created_on',
      label:'Created On'
    },{
      id:'status',
      label:'Status'
    },{
      id:'added_by',
      label:'Added By'
    },{
      id:'agent_assigned',
      label:'Agent Assigned'
    }
  ];
  
  dataSource = ELEMENT_DATA;
  constructor(private backService:BackService) { }

  ngOnInit() {
  this.sortedData = this.dataSource.slice();
  }
  

  sortData(sort: Sort) 
{
  
  const data = this.dataSource.slice();
  if (!sort.active || sort.direction === '') 
  {
    this.sortedData = data;
    return;
  }
  this.dataSource = data.sort((a, b) => {
  const isAsc = sort.direction === 'asc';
  switch (sort.active) {
    case 'customer_name': return compare(a.customer_name, b.customer_name, isAsc);
    case 'task_type': return compare(a.task_type, b.task_type, isAsc);
    case 'created_on': return compare(a.created_on, b.created_on, isAsc);
    case 'status': return compare(a.status, b.status, isAsc);
    case 'added_by': return compare(a.added_by, b.added_by, isAsc);
    case 'agent_assigned': return compare(a.agent_assigned, b.agent_assigned, isAsc);
    default: return 0;
  }
});
}
  

  
}
