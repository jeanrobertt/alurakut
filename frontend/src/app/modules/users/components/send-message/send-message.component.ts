import { lastValueFrom } from 'rxjs';
import { AppState } from 'src/app/store/reducers';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessagesdataService } from 'src/app/core/services/messagesdata.service';
import { IMessage } from 'src/app/core/models/message';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent implements OnInit {
  text?: string;
  sender?: string;
  receiver?: string;

  constructor(private messageService: MessagesdataService, private store: Store<AppState>, private route: ActivatedRoute){}

  async ngOnInit(): Promise<void> {
    try {
      this.receiver = this.route.snapshot.paramMap.get('user')!
      const res = this.store.select(state => state.user.userdata!).subscribe(userdata => this.sender = userdata.login)

    } catch (error) {
      console.log(error);
    }
  }

  sendMessage() {
    try {
      let interval = setInterval(() => {
        if (this.text && this.sender && this.receiver) {
          const message: IMessage = {
            text: this.text,
            sender: this.sender,
            receiver: this.receiver
          }
          this.messageService.sendMessage(message);
          this.text = '';
          clearInterval(interval);
        }
      }, 500)
    } catch (error) {
      console.log(error);
    }
  }
}
