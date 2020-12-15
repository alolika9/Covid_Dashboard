import { Component, OnInit } from '@angular/core';

//Component for the counter element in the dashboard
@Component({
  selector: 'app-countup',
  templateUrl: './countup.component.html',
  styleUrls: ['./countup.component.scss']
})
export class CountupComponent implements OnInit {

  constructor() { }

  public timer: any;
  public oldDate = new Date(("2019-12-01"));

  ngOnInit(): void {
    setInterval(() => {
      //changing the value after every second and updatating in the UI
      this.timer = this.dhms(Math.floor((new Date().getTime() - this.oldDate.getTime())));
    }, 1000)
  }


  dhms(difference) {
    var days, hours, mins, secs;
    //calulation for the number of days, hours, minutes and seconds
    days = Math.floor(difference / (60 * 60 * 1000 * 24) * 1);
    hours = Math.floor((difference % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
    mins = Math.floor(((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
    secs = Math.floor((((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);

    return {
      days: days,
      hours: hours,
      minutes: mins,
      seconds: secs
    };
  }

}
