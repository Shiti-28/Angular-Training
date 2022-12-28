import { Injectable } from '@angular/core';
import { catchError, Observable ,retry} from 'rxjs';
import { Students } from './students.model';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  //stu!:Students[] 
  //Students!:FormGroup
  constructor(private http:HttpClient) { }

  Url:string= "http://localhost:3000";

  //view Data
  getAllData():Observable<Students[]>{
    return this.http.get<Students[]>(this.Url+"/getAllData");
  }

  //submit data
  postData(st:Students){
    //return this.http.post(`${this.Url}/stud`,Students)
    return this.http.post<Students>(this.Url+"/submit",st);
  }

  //delete data
  delete(id:number){
      return this.http.delete(this.Url+"/delete/"+id)
  }
}
