/**
 * Created by roije on 08/10/2016.
 */
import {internships} from './mock-internships';
import {Injectable} from "@angular/core";


@Injectable()
export class InternshipsService{

  public getAllInternships() : any {

    return internships;
  }

  public getInternship(id: number): any {
    return this.getAllInternships().find(internship => internship._id === id);
  }

}
