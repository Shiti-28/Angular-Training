import { Component, OnInit } from '@angular/core';
import { Students } from '../students.model';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentlistComponent } from '../studentlist/studentlist.component';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  
  stud!:StudentComponent
  stu!:Students[]

  s!:ServicesService
  fb!:FormBuilder
  Students!:FormGroup;

   constructor(){}
   //constructor(private fb:FormBuilder){}
   namepattern!:"^[a-zA-Z ]{2,20}$";

  ngOnInit(): void {
      
    this.s.getAllData().subscribe(list =>{
      this.stu=list
    })

    this.Students=this.fb.group({
      id:[''],
      name:['',[Validators.required,Validators.pattern(this.namepattern)]],
      address:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
     
    })
  }


  //submitting form
  submit(){

    if(this.Students.valid)
    {
    this.s.postData(this.Students.value).subscribe();
    }
    // if (this.Students.valid){
    //   this.s.postData(this.Students.value).subscribe();
    //   //this.s.reset();
    // }
    
  }

  //reseting form
  Reset()
  {
    window.location.reload();
  }
}
