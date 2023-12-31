import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html'
})
export class TweetComponent {
	@Input() tweetMessage:string = "";
}
