import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(public actR: ActivatedRoute, public service:ApiService) {
    this.showDetails()
  }

  public carsInfo: any

  showDetails() {
    this.actR.params.subscribe( (data:any) => {
      this.service.getDetails(data.brand).subscribe( (data: any) => {
        console.log(data);
        this.carsInfo = data
      } )
      
    } )
  }

}
