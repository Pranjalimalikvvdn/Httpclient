import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators, Form} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform:FormGroup;
  name:string;
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group(
      {
        name:['',Validators.required]
      }
    );
  }
  
  submit()
  {
    
  }

}
