import { Component, OnInit} from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  country:any[]; 
  filteredcountry:any[]; 
  private _searchTerm:string; 
  get searchTerm(): string {
      return this._searchTerm; 
  }
  set searchTerm(value: string) {
    this._searchTerm = value; 
    this.filteredcountry = this.filteredCountries(value); 
  }

  filteredCountries(searchString: string) {
    return this.country.filter(country =>
      country.Country.toLowerCase().indexOf(searchString.toLowerCase()) !== -1); 
  }

  constructor(private _http: HttpService) {}

  gotData() {
    this._http.getCovid().subscribe(res => {
      this.country = res["Countries"];
      console.log(this.country)
      this.filteredcountry = this.country; 
    })
  }

  ngOnInit() {
    this.gotData();
  }

}
