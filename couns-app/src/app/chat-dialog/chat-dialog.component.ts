import { Component, OnInit } from '@angular/core';
import { ChatService,Message } from '../chat/chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {


    message:Observable<Message[]>;
    formvalue:string;

  constructor(public chat:ChatService) { }

  ngOnInit() {
    //this.chat.talk();
    //appends to array after each new message is added
    this.message=this.chat.conversation.asObservable()
      .scan((acc,val)=>{ return acc.concat(val)});
  }

  sendMessage(){
    this.chat.converse(this.formvalue);
   
  }




}
