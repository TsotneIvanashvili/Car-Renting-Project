import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public service: ApiService) {
    this.showAllCars()
  }

  public cars:any


  showAllCars() {
    this.service.getCars().subscribe( (data) => {
      this.cars = data
    })
  }




}
