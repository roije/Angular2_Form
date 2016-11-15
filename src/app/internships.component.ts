/**
 * Created by roije on 08/10/2016.
 */
import {Component} from "@angular/core/src/metadata/directives";
import {OnInit} from "@angular/core";
import {InternshipsService} from "./internships.service";
import {Router} from "@angular/router";

@Component({
  selector: 'internships',
  template: `
    <div *ngFor="let internship of this.internships" (click)="gotoInternship(internship)">
      {{internship.initials}}
    </div>
    <button routerLink="/internship">Create new internship</button>
    <button routerLink="a">Goto A component</button>
    <button routerLink="b">Goto B component</button>
    
    
    <router-outlet></router-outlet>
  `,
  //: [InternshipsService]
})

export class InternshipsComponent implements OnInit{

  private internships: any[] = [];
  private errorMessage: string = "";

  ngOnInit():void {
    this.internshipsService.getAllInternships().subscribe(
      internships => this.internships = internships,
      error => this.errorMessage = error
    );
  }

  constructor(private internshipsService: InternshipsService,
              private router: Router) {

  }


  gotoInternship(internship: any) : void {
    let link = ['/internship', internship._id];
    this.router.navigate(link);
  }

}
