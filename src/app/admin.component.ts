/**
 * Created by roije on 03/11/2016.
 */
import {Component} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'admin-component',
  template: `
      <div class="row">
        <div class="sidebar col-md-2">
          <button routerLink="users" class="btn btn-primary">Users</button>
          <button routerLink="students" class="btn btn-primary">Students</button>
        </div>
        
        <div class="col-md-9">
          <router-outlet></router-outlet>
        </div>
        
      
      </div>
      
      <style>
        button{
          display: block;
          margin-top: 5px;
          width: 50%;
        }
        
        .sidebar{
          padding: 10px;
        }
      </style>
  `
})

export class AdminComponent{

}
