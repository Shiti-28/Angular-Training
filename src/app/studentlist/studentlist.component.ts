import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Students } from '../students.model';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  stu!:Students[]
  
   //constructor(){}
  constructor(private s:ServicesService){}
  
  ngOnInit(): void {
   
    this.s.getAllData().subscribe(list =>{
      this.stu=list
    })
  }

  delete(id :number)
  {
  this.s.delete(id).subscribe( data =>{
  console.log(data);
  window.location.reload();
})
  }

  
}

