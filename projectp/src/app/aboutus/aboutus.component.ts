import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  name :string= "Pranjali"
  constructor() { }
  
  ngOnInit(): void{
  }
}

