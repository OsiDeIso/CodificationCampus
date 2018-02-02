import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formreservation',
  templateUrl: './formreservation.component.html',
  styleUrls: ['./formreservation.component.css']
})
export class FormreservationComponent implements OnInit {
  
  batiments;
  etages;
  couloirs;
  chambres;

  postBatiment;

  batimentSelected;
  etageSelected;
  couloirSelected;

  constructor( private route: Router, private http: HttpClient ) { }

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

  getEtages(id) {
    this.http.get('https://codificationesp.herokuapp.com/api/Batiments/' + id + '/etages')
      .subscribe((data) => {
        this.etages = data;
        console.log(data);
      });
  }

  getCouloirs(id) {
    this.http.get('https://codificationesp.herokuapp.com/api/Etages/' + id + '/coulois')
      .subscribe((data) => {
        this.couloirs = data;
        console.log(data);
      });
  }

  getChambres(id) {
    this.http.get('https://codificationesp.herokuapp.com/api/Couloirs/' + id + '/chambres')
      .subscribe((data) => {
        this.chambres = data;
        console.log(data);
      });
  }

  select(item) {
    this.batimentSelected = item;
    console.log(this.batimentSelected);
    if (this.batimentSelected !== null) {
      this.getEtages(this.batimentSelected);
    }
  }

  selectEtage(item) {
    this.etageSelected = item;
    console.log(this.etageSelected);
    if (this.etageSelected !== null) {
      this.getCouloirs(this.etageSelected);
    }
  }

  selectCouloir(item) {
    this.couloirSelected = item;
    console.log(this.couloirSelected);
    if (this.couloirSelected !== null) {
      this.getChambres(this.couloirSelected);
    }
  }

  reserver() {
    this.route.navigate(['/code']);
  }
}
