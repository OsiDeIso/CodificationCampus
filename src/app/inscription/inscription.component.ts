import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  account = {
    realm: '',
    username: '',
    password: '',
    credentials: {},
    challenges: {},
    email: '',
    emailVerified: true,
    status: '',
    created: '2018-01-31T00:56:28.932Z',
    lastUpdated: '2018-01-31T00:56:28.933Z',
  };

  etudiant = {
    numEtudiant: '',
    prenom: '',
    nom: '',
    dateNaiss: '2018-01-31T00:56:32.375Z',
    villeNaiss: '',
    numCIN: '',
    departement: '',
    formation: '',
    niveau: 0,
    id: '',
    accountId: ''
  };

  constructor( private route: Router, private http: HttpClient ) { }

  ngOnInit() {
  }

  inscription() {
    const account = this.account;
    console.log(account);
    this.http.post('https://codificationesp.herokuapp.com/api/Accounts', account,
    {
      headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')
    }
  )
    .subscribe(res => {
      console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
