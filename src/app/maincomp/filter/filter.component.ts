import { Component, OnInit } from '@angular/core';
import {BackService} from '../../back.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor(private backService:BackService) { }

  ngOnInit() {
  }

}
