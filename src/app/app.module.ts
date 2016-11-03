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
import {HomeComponent} from "../home.component";
import {AComponent} from "./a.component";
import {BComponent} from "./b.component";
import {AdminComponent} from "./admin.component";
import {StudentsComponent} from "./students.component";
import {UsersComponent} from "./users.component";

@NgModule({
  declarations: [
    AppComponent,
    InternshipEntryComponent,
    AboutComponent,
    InternshipsComponent,
    HomeComponent,
    AComponent,
    BComponent,
    AdminComponent,
    StudentsComponent,
    UsersComponent
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
