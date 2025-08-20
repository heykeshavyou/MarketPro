import { Component } from '@angular/core';
import { BreadCrumb } from "../Components/bread-crumb/bread-crumb";

@Component({
  selector: 'app-profile',
  imports: [BreadCrumb],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  NavLinks:string[]=["User Profile","Orders","Address","Payments","Wishlist"];
}
