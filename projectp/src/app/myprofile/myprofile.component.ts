import { Component, OnInit, Injectable, NgModule } from '@angular/core';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  profileDetails: any = { name: 'abc', age: 22 };
  constructor() { }

  ngOnInit(): void {
  }

  dosearch(string) {
    this.findProfileDetail(string)
      .then((data) => {
        console.log(data)
      },
        error => {
          console.log(error)
        })
  }


  async dosearchTry(string) {
    try {
      const result: any = await this.findProfileDetail(string);
      if (result.status) {
        console.log(result.data);
      }
    } catch (e) {
      console.log(e);
    }

  }


  findProfileDetail(string) {
    return new Promise((resolve, reject) => {
      // condition
      if (string) {
        return resolve({ status: true, data: [1, 2, 3, 4] });
      } else {
        return reject({ status: false })
      }
    })
  }

}
