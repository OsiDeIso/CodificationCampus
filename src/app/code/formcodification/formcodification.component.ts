import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formcodification',
  templateUrl: './formcodification.component.html',
  styleUrls: ['./formcodification.component.css']
})
export class FormcodificationComponent implements OnInit {

  constructor( private route: Router ) { }

  ngOnInit() {
  }

  codifier() {
    this.route.navigate(['/code']);
  }
}
