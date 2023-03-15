import { Observable, filter, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IMessage } from 'src/app/core/models/message';
import { AppState } from 'src/app/store/reducers';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit{
  messages?: IMessage[];
  messages$?: Observable<IMessage[]>

  constructor(private store: Store<AppState>, private route: ActivatedRoute){}

  ngOnInit(): void {
    if (this.route.snapshot.title === 'home') {
      this.store.select(state => state.messages.messages).subscribe(messages => this.handleMessage(messages!))
    } else {
      this.store.select(state => state.userProfile.messages).subscribe(messages => this.handleMessage(messages!))
    }
  }
  /* ngOnInit(): void {
    if (this.route.snapshot.title === 'home') {
      this.store.select(state => state.messages.messages).subscribe(messages => this.handleMessage(messages!))
    } else {
      this.store.select(state => state.userProfile.messages).subscribe(messages => this.handleMessage(messages!))
    }
  } */

  handleMessage(messages: IMessage[]) {
    let interval = setInterval(() => {
      if (messages) {
        this.messages = messages.map(message => {
          const newMessage: IMessage = {
            _id: message._id,
            text: message.text,
            sender: message.sender,
            receiver: message.receiver,
            createdAt: this.handleDate(message.createdAt!),
            updatedAt: this.handleDate(message.updatedAt!)
          }
          return newMessage
        })
        clearInterval(interval)
      }
    }, 500)
  }

  handleDate(dateString: string): string {
    let date = new Date(dateString);
    let dateNow = new Date();
    if (date.toLocaleDateString() == dateNow.toLocaleDateString()) {
      return `Hoje, ${date.toLocaleTimeString()}`;
    } else {
      return date.toLocaleString();
    }
  }
}
