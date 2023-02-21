import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from "@angular/core"
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'twitter-scrapper-ui';
  codes: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const twitterScript = document.createElement('script');
    twitterScript.async = true;
    twitterScript.src = "https://platform.twitter.com/widgets.js";

    this.http
      .get('http://localhost:5083/posts/get')
      .subscribe((response: any) => {
        this.codes = response;
        console.log(this.codes);
        document.head.appendChild(twitterScript);
      });
  }
}
