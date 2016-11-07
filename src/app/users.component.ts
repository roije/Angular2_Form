/**
 * Created by roije on 03/11/2016.
 */
import {Component} from "@angular/core/src/metadata/directives";
@Component({
  selector: 'users-component',
  template: `
    <div class="userscomponent">
      <h1>Users component</h1>
      <button class="btn btn-success">Add</button>
      <button class="btn btn-info">Edit</button>
      <button class="btn btn-danger">Delete</button>
    </div>
    <style>
      button{
        margin-right: 5px;
      }
      
      .userscomponent{
        background-color: white;
        padding: 10px;
        margin-top: 10px;
      }
    </style>
  `
})

export class UsersComponent{

}
