import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-commontext',
  templateUrl: './commontext.component.html',
  styleUrls: ['./commontext.component.css']
})
export class CommontextComponent implements OnInit {
  message:string;
 @Input('name') masterMessage: string;
  constructor() { }

  ngOnInit(): void {
    this.masterMessage="this is message from commontext";
  }

}
