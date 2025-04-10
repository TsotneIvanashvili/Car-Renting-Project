import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ApiService } from '../api.service';
import { IconsComponent } from '../icons/icons.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, IconsComponent, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(public service: ApiService) {
    this.showAllCars()
  }
  
  public cars:any;
  
  
  showAllCars() {
    this.service.getCars().subscribe( (data : any) => {
      this.cars = data
    })
  }

}

