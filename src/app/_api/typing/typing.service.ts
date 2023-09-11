import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TypingService {

  constructor(private _httpClient: HttpClient, private _afs: AngularFirestore) {
  }

  getTypingMenu(){
    return this._httpClient.get("/assets/data/typing/typing-menu.json");
  }

  getText(id) {
    return this._afs.collection('typing').doc(id).snapshotChanges();
  }

  getTypingScores(uid){
    return this._afs.collection('typingScores').doc(uid).snapshotChanges();
  }

  addScore(uid, typingScoreDoc) {
    return this._afs.collection('typingScores').doc(uid).set(
      typingScoreDoc
    );
  }

  getTypingTrainerSummery(){
    // return this._httpClient.get("/assets/data/typing/typing-trainer-summery.json");
    return this._httpClient.get("http://localhost:3000/typingSummary");
  }

}
  