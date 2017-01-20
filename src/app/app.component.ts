import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ FirebaseService ]
})
export class AppComponent implements OnInit {
  title = 'app works!';
 
  businesses: Business[];
  categories: Category[];
  appState: string;
  activeKey: string;

  activeCompany: string;
  activeCategory: string;
  activeYearsInBusiness: string;
  activeDescription: string;
  activePhone: string;
  activeEmail: string;
  activeStreetAddress: string;
  activeCity: string;
  activeState: string;
  activeZipcode: string;
  

  constructor(private firebaseService: FirebaseService){
  	this.appState = 'extend';
  	this.activeKey = '0';
  }

  ngOnInit(){
  	this.firebaseService.getCategories().subscribe(categories => {
  		this.categories = categories
  	});

  	this.firebaseService.getBusinesses().subscribe(businesses => {
  		this.businesses = businesses
  		console.log(businesses);

  	});
  }

  addBusiness(
  	company: string,
  	category: string,
  	years_in_business: number,
  	description: string,
  	phone: string,
  	email: string,
  	street_address: string,
  	city: string,
  	state: string,
  	zipcode: string
  	){
  	let created_at = new Date().toString();

  	let newBusiness = {
  		company: company,
  		category: category,
  		years_in_business: years_in_business,
  		description: description,
  		phone: phone,
  		email: email,
  		street_address: street_address,
  		city: city,
  		state: state,
  		zipcode: zipcode,
  		create_at: created_at
  	}
  }

  updateBusiness(){

  }
} 


export interface Business {
	$key?: string;
	company?: string;
	description?: string;
	category: string;
	years_in_business?: number;
	street_address?: string;
	city?: string;
	state?: string;
	zipcode?: string;
	phone?: string;
	email?: string;
	created_at: string;
}

export interface Category {
	$key?: string;
	name?: string;
}
