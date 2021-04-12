import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactus:FormGroup;
  name:string;
  phone:number;
  email:string;
  submitted:true;
  postData:any=[];

  constructor(private formbuilder:FormBuilder) { 
    
   
  }

  ngOnInit(): void 
  {
    this.contactus=this.formbuilder.group
    ({
      name:['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    });

  }

  submit(data)
  {
    this.postData.push(data);
    this.submitted=true;
    console.log(this.postData);
  }
}
