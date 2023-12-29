import { Component } from '@angular/core';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html'
})
export class NewPostComponent {
	tweetMessage:string = "";
  tweetMaxLength:number = 240;
	tweetRemain:number = this.tweetMaxLength;

	tweetChange(){
		this.tweetRemain = 240 - this.tweetMessage.length;
	}

	sendTweet(){
		alert(this.tweetMessage)
		this.tweetMessage = "";
	}
}
