import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-neoplants-clone',
  templateUrl: './neoplants-clone.component.html',
  styleUrls: ['./neoplants-clone.component.scss']
})
export class NeoplantsCloneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.style.background = "#262626";
  }

}
