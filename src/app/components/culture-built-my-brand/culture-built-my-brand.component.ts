import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-culture-built-my-brand',
  templateUrl: './culture-built-my-brand.component.html',
  styleUrls: ['./culture-built-my-brand.component.scss']
})
export class CultureBuiltMyBrandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.background = "#FFCC65";
  }

}
