import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bb',
  templateUrl: './bb.component.html',
  styleUrls: ['./bb.component.scss']
})
export class BbComponent implements OnInit {
  @Input() age = 18;

  constructor() { }

  ngOnInit(): void {
  }

}
