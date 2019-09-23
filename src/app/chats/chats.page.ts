import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  UserName: string = "";
  message: string = "";
  messages = [];
  constructor(public navCtr1: NavController) {
    this.getMessages();
  }
  getMessages() {
    var messagesREf = firebase.database().ref().child("mensajes");
    messagesREf.on("value", (snap) => {
      var data = snap.val();
      this.messages = [];
      for (var key in data) {
        this.messages.push(data[key]);

      }
    });
  }
  sendMessage(){
    var messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, nombre: "Guille" });
    this.message = "";
  }

  ngOnInit() {
  }

}
