import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, Form } from '@angular/forms';
import { Router } from '@angular/router';
import { RegustationService } from './regustation.service';

@Component({
  selector: 'app-regustration',
  templateUrl: './regustration.component.html',
  styleUrls: ['./regustration.component.css']
})
export class RegustrationComponent implements OnInit {

  registrationf: FormGroup;
  fname: string;
  lname: string;
  phone: number;
  address: string;
  email: string;
  submitted: true;
  postData: any = [];

  constructor(private formbuilder: FormBuilder,
    private router: Router,
    private regustationService: RegustationService) {


  }

  ngOnInit(): void {
    this.registrationf = this.formbuilder.group
      ({
        fname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
        lname: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
        phone: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(13)]],
        address: ['',Validators.required],
        email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]

      });

  }

  submit() {
    this.submitted = true;
    if(this.registrationf.invalid){
      window.alert('Inputs are invalid');
      return
    }

    const data = this.registrationf.value;
   
    console.log(this.postData);

    this.regustationService
      .createUser(data)
      .subscribe((response) => {
        console.log(response);
        window.alert(response.message);
        this.router.navigate(['/login']);
      },
        (error) => {
          console.log(error);
        })
  }
}

