/**
 * Created by roije on 08/10/2016.
 */
import {internships} from './mock-internships';
import {Injectable} from "@angular/core";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";


@Injectable()
export class InternshipsService{

  internships: any[] = [];
  constructor(private http : Http) {

  }

  //I want a mehtod that returns the internships
  public getAllInternships(): Observable<any[]> {

    return this.http.get("http://angular2api2.azurewebsites.net/api/internships/")
      .map(this.extractData)
      .catch(this.handleError);

  }

  public createInternship(internship : any) : Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });


    return this.http.post("http://angular2api2.azurewebsites.net/api/internships/", internship, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  public getInternship(id: string): any {
    //return this.getAllInternships().find(internship => internship._id === id);
    //console.log(this.internships.length);
    for(var i = 0; i < this.internships.length; i++) {
      if(this.internships[i]._id == id) {
        console.log(this.internships[i]);
        return this.internships[i];
      }
    }

  }

  private extractData(res: Response) {
    let body = res.json();
    this.internships = body;
    console.log(body);
    return body || {};
  }

  private handleError(error: Response | any) {
    console.log(error);
    return Observable.throw("some error message");
  }

}
