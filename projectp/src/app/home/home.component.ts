import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  httpdata;
  searchData;
  constructor(private http: HttpClient) { }
   ngOnInit() {
     this.initalizeHome();


   }

   initalizeHome() {
    this.http.get("http://jsonplaceholder.typicode.com/users").
    subscribe((data) => this.displaydata(data));
   }

   nextButtonClickEvent(): void {
    console.log('next clicked')
  }
   displaydata(data) 
   {this.httpdata = data;};

   filterDataByName(){
    this.httpdata = this.httpdata.filter(val => val.name.includes(this.searchData));
    if(this.searchData === '') {
      this.initalizeHome();
    }
  }

  }

  