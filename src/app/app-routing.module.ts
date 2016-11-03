import {NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about.component";
import {InternshipsComponent} from "./internships.component";
import {InternshipEntryComponent} from "./form.component";
import {HomeComponent} from "../home.component";
import {AComponent} from "./a.component";
import {BComponent} from "./b.component";
import {AdminComponent} from "./admin.component";
import {UsersComponent} from "./users.component";
import {StudentsComponent} from "./students.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: ''},
      { path: 'users', component: UsersComponent},
      { path: 'students', component: StudentsComponent}
    ]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'internships',
    component: InternshipsComponent,
    children: [
      { path: ''},
      { path: 'a', component: AComponent},
      { path: 'b', component: BComponent}
    ]
  },
  {
    //new interships
    path: 'internship',
    component: InternshipEntryComponent,

  },
  {
    //edit internships
    path: 'internship/:id',
    component: InternshipEntryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsV16RoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
