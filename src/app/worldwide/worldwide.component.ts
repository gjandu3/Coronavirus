import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'; 

@Component({
  selector: 'app-worldwide',
  templateUrl: './worldwide.component.html',
  styleUrls: ['./worldwide.component.scss']
})
export class WorldwideComponent implements OnInit {
  title = 'covid';
  data:any = [];
  constructor(private _http: HttpService) {}

  getData() {
    this._http.getCovid().subscribe(res => {
      this.data = res["Global"];
      console.log(this.data)
      return this.data; 
    })
  }

  ngOnInit() {
    this.getData()
  }
  
}
