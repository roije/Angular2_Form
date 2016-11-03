/**
 * Created by roije on 03/11/2016.
 */
import {Component} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'admin-component',
  template: `
      <br />
      <button routerLink="users">Users</button>
      <br />
      <button routerLink="students">Students</button>
      
      <router-outlet></router-outlet>
  `
})

export class AdminComponent{

}
