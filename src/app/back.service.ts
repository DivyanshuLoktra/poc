import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  constructor(  private router: Router) { }
  loggedIn:boolean=false;

  filters=[
    {
      label:'Customer Name',
      id:'customer_name',
      widget:'textWidget',
      placeholder:'Enter Name'
    },
    {
      label:'Task Type',
      id:'task_type',
      widget:'dropdownWidget',
      placeholder:'Enter Task Name'
    },
    {
      label:'Created On',
      id:'created_on',
      widget:'dateWidget',
      placeholder:'Enter Date'
    },
    {
      label:'Last Updated On',
      id:'last_updated_on',
      widget:'dateWidget',
      placeholder:'Enter Date'
    },
    {
      label:'Task Status',
      id:'task_status',
      widget:'dropdownWidget',
      placeholder:'Enter Date'
    },
    {
      label:'Agent Assigned',
      id:'agent_assigned',
      widget:'autoCompleteWidget',
      placeholder:'Enter Name'
    },
    {
      label:'Added By',
      id:'added_by',
      widget:'autoCompleteWidget',
      placeholder:'Enter Name'
    }
  ];


  //The task forms schema


  taskForms=[

    {
      id:'id1',
      schema:[
                {
                  label:'Customer Name',
                  id:'customer_name',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Customer Number',
                  id:'customer_number',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Collection Address',
                  id:'customer_address',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Product Type',
                  id:'product_type',
                  widget:'selectWidget',
                  data:[
                    {value: '1', viewValue: 'Home Loan'},
                    {value: '2', viewValue: 'Car Loan'},
                    {value: '3', viewValue: 'Personal Loan'}
                  ],
                  required:true
                },
                {
                  label:'Loan Id',
                  id:'loan_id',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Bucket Type',
                  id:'bucket_type',
                  widget:'selectWidget',
                  data:[
                    {value: '1', viewValue: 'D30'},
                    {value: '2', viewValue: 'D60'},
                    {value: '3', viewValue: 'D90'}
                  ],
                  required:true
                },
                {
                  label:'Loan Amount',
                  id:'loan_amount',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Statement Amount',
                  id:'statement_amount',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Minimum Amount Due',
                  id:'min_amount_due',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Remaining Amount',
                  id:'rem_amount',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Remaining Installments',
                  id:'rem_install',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Due Date',
                  id:'due_date',
                  widget:'dateWidget',
                  required:true
                }
             ]
    },
    {
      id:'id2',
      schema:[
                {
                  label:'Customer Name',
                  id:'customer_name',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Customer Number',
                  id:'customer_number',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Case Address',
                  id:'customer_address',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Product Type',
                  id:'product_type',
                  widget:'selectWidget',
                  data:[
                    {value: '1', viewValue: 'Home Loan'},
                    {value: '2', viewValue: 'Car Loan'},
                    {value: '3', viewValue: 'Personal Loan'}
                  ],
                  required:true
                },
                {
                  label:'Loan Id',
                  id:'loan_id',
                  widget:'textWidget',
                  required:true
                },
                
                {
                  label:'Property Size',
                  id:'property_size',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Due Date',
                  id:'due_date',
                  widget:'dateWidget',
                  required:true
                }
             ]
    },
    {
      id:'id3',
      schema:[
                {
                  label:'DSA Name',
                  id:'customer_name',
                  widget:'textWidget',
                  required:true
                },
                
                {
                  label:'Address',
                  id:'customer_address',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Type of Channel',
                  id:'product_type',
                  widget:'selectWidget',
                  data:[
                    {value: '1', viewValue: 'Builder'},
                    {value: '2', viewValue: 'DSA'},
                    {value: '3', viewValue: 'Dealer'},
                    {value: '4', viewValue: 'Connector'},
                    {value: '5', viewValue: 'Referall'},
                    {value: '6', viewValue: 'Others'}      
                  ],
                  required:true
                },
                {
                  label:'Remarks',
                  id:'remarks',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Due Date',
                  id:'due_date',
                  widget:'dateWidget',
                  required:true
                }
             ]
    },
    {
      id:'id4',
      schema:[
                {
                  label:'Lead/Customer Name',
                  id:'customer_name',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Product Type',
                  id:'product_type',
                  widget:'selectWidget',
                  data:[
                    {value: '1', viewValue: 'Home Loan'},
                    {value: '2', viewValue: 'Car Loan'},
                    {value: '3', viewValue: 'Personal Loan'}
                  ],
                  required:true
                },
                {
                  label:'Type of Customer',
                  id:'customer_type',
                  widget:'selectWidget',
                  data:[
                    {value: '1', viewValue: 'Salaried'},
                    {value: '2', viewValue: 'Non-professional'}     
                  ],
                  required:true
                },
                {
                  label:'Type of Address',
                  id:'address_type',
                  widget:'selectWidget',
                  data:[
                    {value: '1', viewValue: 'Workplace'},
                    {value: '2', viewValue: 'Residence'},
                    {value: '3', viewValue: 'Factory'},
                    {value: '4', viewValue: 'Site-Location'},
                    {value: '5', viewValue: 'Others'}     
                  ],
                  required:true
                },
                {
                  label:'Address',
                  id:'customer_address',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Remarks',
                  id:'remarks',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Due Date',
                  id:'due_date',
                  widget:'dateWidget',
                  required:true
                }
             ]
    },
    {
      id:'id5',
      schema:[
                {
                  label:'Customer Name',
                  id:'customer_name',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Customer Number',
                  id:'customer_number',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Visit Description',
                  id:'visit_desc',
                  widget:'textWidget',
                  required:true
                },
                {
                  label:'Due Date',
                  id:'due_date',
                  widget:'dateWidget',
                  required:true
                }
             ]
    },
  ]


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////ROUTE ACTIVATER FUNCTION//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  isAuthenticated()
  {
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(this.loggedIn)
      },800);

    });
    return promise;
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////LOGIN FUNCTION///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  login()
  {
    this.loggedIn = true;
    this.router.navigate(['/main']);
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////LOGOUT FUNCTION///////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  logout()
  {
    this.loggedIn = false;
  }

  

}
