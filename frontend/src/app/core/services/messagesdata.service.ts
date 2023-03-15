import { Store } from '@ngrx/store';
import { APIService } from './api.service';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IMessage } from '../models/message';
import { AppState } from 'src/app/store/reducers';
import { actions$ } from 'src/app/store/actions';

@Injectable({
	providedIn: 'root',
})
export class MessagesdataService {
	constructor(
		private apiService: APIService,
		private store: Store<AppState>
	) {}

	async getMessages(receiver: string) {
		try {
			const resdata = this.apiService
				.getMessages(receiver);

			const messages = await lastValueFrom(resdata);

			if (messages.scrapMessages !== undefined) {
				this.store.dispatch(
					actions$.setMessages({ messages: messages.scrapMessages })
				);
			}
		} catch (error) {
			console.log(error);
		}
	}

	async sendMessage(message: IMessage) {
		const resdata = this.apiService.sendMessage(message);
		const messagedata = await lastValueFrom(resdata);

		if (messagedata.scrapMessage) {
			this.store.dispatch(
				actions$.sendMessage({ message: messagedata.scrapMessage })
			);
		}
	}

	/* updateMessage(id: string, message: IMessage) {
		this.apiService.updateMessage(id, message).subscribe((messagedata) => {
			if (messagedata.scrapMessage) {
				this.getMessages(message.receiver);
			}
		});
	}

	deleteMessage(id: string) {
		this.apiService.deleteMessage(id).subscribe((messagedata) => {
			if (messagedata.scrapMessage) {
				this.getMessages(messagedata.scrapMessage.receiver);
			}
		});
	} */
}
