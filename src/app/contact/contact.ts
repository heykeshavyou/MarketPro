import { Component } from '@angular/core';
import { Info } from "../Components/info/info";
import { BreadCrumb } from "../Components/bread-crumb/bread-crumb";

@Component({
  selector: 'app-contact',
  imports: [Info, BreadCrumb],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
