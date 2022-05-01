import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    NgbNavModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class HomeModule {}
