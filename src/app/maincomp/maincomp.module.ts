import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner/partner.component';
import { FilterComponent } from './filter/filter.component';
import { DialogOverviewExampleDialogComponent } from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@NgModule({
  declarations: [PartnerComponent, FilterComponent, DialogOverviewExampleDialogComponent],
  imports: [
    CommonModule
  ]
})
export class MaincompModule { }
