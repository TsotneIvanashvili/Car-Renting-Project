import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilterCarsComponent } from './filter-cars/filter-cars.component';
import { RentCarsComponent } from './rent-cars/rent-cars.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "rent", component: RentCarsComponent},
    {path: "filter", component: FilterCarsComponent},
    {path: "details/:brand", component: DetailsComponent},
    
];
