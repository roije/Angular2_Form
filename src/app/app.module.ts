import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InternshipEntryComponent} from "./form.component";
import {InternshipsService} from "./internships.service";
import {AboutComponent} from "./about.component";
import {InternshipsComponent} from "./internships.component";
import {routing} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    InternshipEntryComponent,
    AboutComponent,
    InternshipsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule, //I added this.
    routing
  ],
  providers: [InternshipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
