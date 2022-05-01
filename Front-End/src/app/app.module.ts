import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ColumnChangesService,
  DimensionsHelper,
  ScrollbarHelper,
} from '@swimlane/ngx-datatable';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ScrollbarHelper, DimensionsHelper, ColumnChangesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
