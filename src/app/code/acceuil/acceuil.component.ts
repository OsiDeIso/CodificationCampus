import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  batiments;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getBatiment();
  }

  getBatiment() {
    this.http.get('https://codificationesp.herokuapp.com/api/Batiments')
    .subscribe((data) => {
      this.batiments = data;
      console.log(data);
    });
  }

}
