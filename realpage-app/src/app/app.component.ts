import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private data: DataService) {}
  quote:string;
  author: string;
  developer = 'Johnathan M. Tebeau';
  profile = 'https://media.licdn.com/dms/image/C5603AQHV94BM9VmKgw/profile-displayphoto-shrink_100_100/0?e=1545264000&v=beta&t=39aEWbAZ9VXtDeSnVeusru4aIOb5hL2KEoScYAPK6cs';

  ngOnInit() {
    this.data.currentQuote.subscribe(quote => this.quote = quote);
    this.data.currentAuthor.subscribe(author => this.author = author);

  }
  newQuote() {
    this.data.changeQuote("Education is what remains after one has forgotten what one has learned in school.");
    this.data.changeQuote("Albert Einstein");
  }
}
