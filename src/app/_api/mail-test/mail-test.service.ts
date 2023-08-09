import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MailTestService {

  constructor(private _httpClient: HttpClient, private _afs: AngularFirestore) {
  }

  getMailTestMenu(){
    return this._httpClient.get("/assets/data/mail-test/mail-test-menu.json");
  }

  getMailText(id) {
    return this._afs.collection('mailTest').doc(id).snapshotChanges();
  }

  getmailSubmissions(uid){
    return this._afs.collection('mailTestSubmissions').doc(uid).snapshotChanges();
  }

  mailSubmission(uid, data) {
    return this._afs.collection('mailTestSubmissions').doc(uid).set(
      data
    );
  }

  // -------------------

  getSubmittedMails(){
    return this._httpClient.get("/assets/data/mail-test/submittedMails.json");
  }

}
