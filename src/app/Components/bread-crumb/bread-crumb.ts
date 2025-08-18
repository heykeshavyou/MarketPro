import { Component,Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bread-crumb',
  imports: [RouterLink],
  templateUrl: './bread-crumb.html',
  styleUrl: './bread-crumb.css'
})
export class BreadCrumb {
  @Input() title=''; 
}
