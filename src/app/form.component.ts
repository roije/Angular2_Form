/**
 * Created by roije on 05/10/2016.
 */
import {Component, OnInit} from '@angular/core';
import {MyValidators} from './MyValidators';
import {
  FormBuilder,
  FormGroup,
  Validators, FormControl, AbstractControl
} from '@angular/forms';
import {ActivatedRoute, Params} from "@angular/router";
import {InternshipsService} from "./internships.service";

//Branch form_with_routes

@Component({
  selector: 'internship-entry',
  styleUrls: ['form.component.css'],
  template: `
<div class="container">
  <h2 class="col-md-8">Internship Entry</h2>
  <form [formGroup]="internshipForm" (ngSubmit)="onSubmit(internshipForm)" class="col-md-8">

    <div class="row" >
      <div class="form-group">
        <label for="initials">Your KEA initials</label>
        <br/>
        <input type="text"
               id="initials"
               placeholder="e.g. 123john"
               class="form-control"
               value="{{this.selectedInternship?.initials}}"
               [class.error]="!internshipForm.controls.initials.valid && internshipForm.controls.initials.touched && 
                              internshipForm.controls.initials.hasError('invalidChars')"
               [formControl]="internshipForm.controls['initials']">
          
         <div class="error-message" *ngIf="!internshipForm.controls.initials.valid && 
                      internshipForm.controls.initials.touched" >
           Name field is invalid
         </div>
         
         <div class="error-message" *ngIf="internshipForm.controls.initials.hasError('required') &&
                     internshipForm.controls.initials.touched ">
            Please enter your initials
         </div>
         
         <div class="error-message" *ngIf="internshipForm.controls.initials.hasError('invalidChars') && 
         internshipForm.controls.initials.touched">
            Must begin with 123
         </div>
       </div>
    </div>
    
    <div class="row">
      <div class="form-group">
        <label for="email">Your email</label>
        <br/>
        <input type="text"
               id="email"
               placeholder="e.g. john@john.com"
               class="form-control"
               value="{{this.selectedInternship?.email}}"
               [class.error]="!internshipForm.controls.email.valid && internshipForm.controls.email.touched"
               [formControl]="internshipForm.controls['email']">
                     
         <div class="error-message" *ngIf="internshipForm.controls.email.hasError('invalidEmail') &&
                      internshipForm.controls.email.touched ">
           Email format must be name@example.com
         </div>
         
         <div class="error-message" *ngIf="internshipForm.controls.email.hasError('required') &&
                     internshipForm.controls.email.touched ">
            Please enter an email
         </div>
       </div>
    </div>
    
    <div class="row">
      <div class="form-group">
        <label for="visitdate">Visit date</label>
        <br/>
        <input type="text"
               id="visitdate"
               placeholder="e.g. 01/01/16"
               class="form-control"
               value="{{this.selectedInternship?.visitDate}}"
               [class.error]="!internshipForm.controls.visitdate.valid && internshipForm.controls.visitdate.touched || 
                internshipForm.controls.visitdate.hasError('pattern')"
               [formControl]="internshipForm.controls['visitdate']">
                     
         <div class="error-message" *ngIf="!internshipForm.controls.visitdate.valid && 
                      internshipForm.controls.visitdate.touched " >
           Date format must me dd/mm/yyy
         </div>
         
         <div class="error-message" *ngIf="internshipForm.controls.visitdate.hasError('required') &&
                     internshipForm.controls.visitdate.touched ">
            Please enter a date
         </div>
       </div>
    </div>
    
    
    <div class="row">
      <div class="form-group">
        <label for="studentname">Name of the student you visited</label>
        <br/>
        <input type="text"
               id="studentname"
               placeholder="e.g. John Doe"
               class="form-control"
               value="{{this.selectedInternship?.nameOfStudent}}"
               [class.error]="!internshipForm.controls.studentname.valid && internshipForm.controls.studentname.touched"
               [formControl]="internshipForm.controls['studentname']">
               
        <div class="error-message" *ngIf="!internshipForm.controls.studentname.valid && 
                      internshipForm.controls.studentname.touched " >
           This field is invalid
         </div>
         
         <div class="error-message" *ngIf="internshipForm.controls.studentname.hasError('required') &&
                     internshipForm.controls.studentname.touched ">
            Please enter a student name
         </div>             
      </div>
    </div>
    
    
    <div class="row">
      <div class="form-group">
      <label for="internid">ID of internship agreement</label>
      <br/>
      <input type="text"
             id="internid"
             placeholder="e.g. intern1234"
             class="form-control"
             value="{{this.selectedInternship?._id}}"
             [class.error]="!internshipForm.controls.internid.valid && internshipForm.controls.internid.touched"
             [formControl]="internshipForm.controls['internid']">
             
      <div class="error-message" *ngIf="!internshipForm.controls.internid.valid && 
                    internshipForm.controls.internid.touched " >
         This field is invalid
       </div>
       
       <div class="error-message" *ngIf="internshipForm.controls.internid.hasError('required') &&
                   internshipForm.controls.internid.touched ">
          Please enter an internship ID
       </div>             
      </div>
    </div>
    
    <div class="row">
      <div class="form-group">
        <label for="companyname">Company you visited</label>
        <br/>
        <input type="text"
               id="companyname"
               placeholder="e.g. Pied Piper"
               class="form-control"
               value="{{this.selectedInternship?.companyName}}"
               [class.error]="!internshipForm.controls.companyname.valid && internshipForm.controls.companyname.touched"
               [formControl]="internshipForm.controls['companyname']">
               
        <div class="error-message" *ngIf="!internshipForm.controls.companyname.valid && 
                      internshipForm.controls.companyname.touched " >
           This field is invalid
         </div>
         
         <div class="error-message" *ngIf="internshipForm.controls.companyname.hasError('required') &&
                     internshipForm.controls.companyname.touched ">
            Please enter a company name
         </div>             
      </div>
    </div>
    
    <div class="row">
      <div class="form-group">
        <label for="personmet">Name(s) of the persons you met at the company</label>
        <br/>
        <input type="text"
               id="personmet"
               placeholder="e.g. Bob Larsen, Johanne Bech"
               class="form-control"
               value="{{this.selectedInternship?.namesOfPersons}}"
               [class.error]="!internshipForm.controls.personmet.valid && internshipForm.controls.personmet.touched"
               [formControl]="internshipForm.controls['personmet']">
               
        <div class="error-message" *ngIf="!internshipForm.controls.personmet.valid && 
                      internshipForm.controls.personmet.touched " >
           This field is invalid
         </div>
         
         <div class="error-message" *ngIf="internshipForm.controls.personmet.hasError('required') &&
                     internshipForm.controls.personmet.touched ">
            Please name of person(s) you met
         </div>             
      </div>
    </div>
    
    <div class="row">
     <div class="form-group">
        <label for="companyvision">Company vision</label>
        <br/>
        <textarea type="text"
             rows="5"
             id="companyvision"
             placeholder="Write something here with a minimum lenght of 10 characters...)"
             class="form-control"
             value="{{this.selectedInternship?.companyVision}}"
             [class.error]="!internshipForm.controls.companyvision.valid"
             [formControl]="internshipForm.controls['companyvision']"> </textarea>
    
    
        <!--Dirty: Control's value has changed-->
        
        <div class="error-message" *ngIf="internshipForm.controls.companyvision.dirty && 
                                          !internshipForm.controls.companyvision.valid">
            Write at least 10 characters   
        </div>
       </div>
    </div>
    
    <div class="row">
      <div class="form-group">
      <label for="companycompetence">Enter company competence need</label>
      <br/>
      <textarea type="text"
             rows="5"
             id="companycompetence"
             placeholder="Write something here with a minimum lenght of 10 characters..."
             class="form-control"
             value="{{this.selectedInternship?.companyCompetenceNeed}}"
             [class.error]="!internshipForm.controls.companycompetence.valid"
             [formControl]="internshipForm.controls['companycompetence']"> </textarea>
    
        
        <!--Dirty: Control's value has changed-->
        
        <div class="error-message" *ngIf="internshipForm.controls.companycompetence.dirty && 
                                          !internshipForm.controls.companycompetence.valid">
            Write at least 10 characters   
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="form-group">
        <label for="studentcompetence">Enter student competence </label>
        <br/>
        <textarea type="text"
               rows="5"
               id="studentcompetence"
               placeholder="Write something here with a minimum lenght of 10 characters..."
               class="form-control"
               value="{{this.selectedInternship?.studentComptence}}"
               [class.error]="!internshipForm.controls.studentcompetence.valid"
               [formControl]="internshipForm.controls['studentcompetence']"> </textarea>
      
      
          <!--Dirty: Control's value has changed-->
          
          <div class="error-message" *ngIf="internshipForm.controls.studentcompetence.dirty && 
                                            !internshipForm.controls.studentcompetence.valid">
              Write at least 10 characters   
          </div>
      </div>
    </div>
    
    
    <div class="row">
      <div class="form-group">
        <label for="collaborative">Collaborative oppurtunities </label>
        <br/>
        <textarea type="text"
               rows="5"
               id="collaborative"
               placeholder="Write something here with a minimum lenght of 10 characters..."
               class="form-control"
               value="{{this.selectedInternship?.collabOpportunities}}"
               [class.error]="!internshipForm.controls.collaborative.valid"
               [formControl]="internshipForm.controls['collaborative']"> </textarea>
    
        <!--Dirty: Control's value has changed-->
        
        <div class="error-message" *ngIf="internshipForm.controls.collaborative.dirty && 
                                          !internshipForm.controls.collaborative.valid">
            Write at least 10 characters   
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="form-group">
        <label for="othercomments">Other comments </label>
        <br/>
        <textarea type="text"
               rows="5"
               id="othercomments"
               placeholder="Write something here..."
               class="form-control"
               value="{{this.selectedInternship?.otherComments}}"
               [formControl]="internshipForm.controls['othercomments']"> </textarea>
        </div>
        
        <button type="submit" class="btn btn-success">Submit</button>
        
    </div>
    
    
  </form>
</div>
  `
})
export class InternshipEntryComponent implements OnInit
{
  selectedInternship : any;
  internshipForm: FormGroup;

  ngOnInit(): void {

    this.route.params.forEach((params: Params) =>
    {
      let id = +params['id']; // (+) converts string 'id' to a number
      this.selectedInternship = this.internshipsService.getInternship(id);
    });

    this.internshipForm = this.fb.group(
      {
        'initials': ['', Validators.compose([Validators.required, MyValidators.getInitialsValidator()])],
        'email': ['', Validators.compose([Validators.required, MyValidators.getEmailValidator()])],
        'visitdate': ['', [
          Validators.required,
          Validators.pattern("[0-9]{2}\/[0-9]{2}\/[0-9]{2}")
        ]],
        'studentname': ['', Validators.required],
        'internid' : ['', Validators.required],
        'companyname' : ['', Validators.required],
        'personmet' : ['', Validators.required],
        'companyvision' : ['', Validators.minLength(10)],
        'companycompetence' : ['', Validators.minLength(10)],
        'studentcompetence' : ['', Validators.minLength(10)],
        'collaborative' : ['', Validators.minLength(10)],
        'othercomments' : ['']


      });
  }


  constructor(private  fb: FormBuilder, private route: ActivatedRoute, private internshipsService : InternshipsService) {

  }

  public onSubmit(form) {
    if(form.valid) {
      console.log("yes its valid")
    }
    else {
      console.log("no its not. fix errors por favor")
    }
  }
}
