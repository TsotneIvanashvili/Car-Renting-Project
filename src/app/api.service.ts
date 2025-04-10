import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { 

  }



  getCars (){
    return this.http.get(`https://rentcar.stepprojects.ge/api/Car`)
  }


  getDetails(id: any) {
    return this.http.get(`https://rentcar.stepprojects.ge/api/Car/${id}`)
  }

}
