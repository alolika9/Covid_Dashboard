import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})

// code if any URL is not found
// the user is redirected to page with 404 Error
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
