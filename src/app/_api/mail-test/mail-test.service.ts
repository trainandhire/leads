import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class MailTestService {

  constructor(private _httpClient: HttpClient, private _afs: AngularFirestore) {
  }

  getMailTestMenu() {
    return this._httpClient.get("/assets/data/mail-test/mail-test-menu.json");
  }

  getMailText(id) {
    return this._afs.collection('mailTest').doc(id).snapshotChanges();
  }

  // getmailSubmissions(uid) {
  //   return this._afs.collection('mailTestSubmissions').doc(uid).snapshotChanges();
  // }

  // mailSubmission(uid, data) {
  //   return this._afs.collection('mailTestSubmissions').doc(uid).set(
  //     data
  //   );
  // }
  // -------------------



  getSubmittedMails() {
    return this._httpClient.get("http://localhost:3000/submittedEmails");
  }


  createMail(data: any) {

    let scores: any = {
      "scores": {
        "from": {
          "isCorrect": false,
          "points": 1
        },
        "to": {
          "isCorrect": false,
          "points": 1
        },
        "cc": {
          "isCorrect": false,
          "points": 1
        },
        "subject": {
          "isCorrect": false,
          "points": 1
        },
        "salutation": {
          "isCorrect": false,
          "points": 1
        },
        "body": {
          "isCorrect": false,
          "points": 4
        },
        "signature": {
          "isCorrect": false,
          "points": 1
        },
        "total": {
          "points": 0
        }
      }
    }

    let mail: any = { ...data, ...scores }
    return this._httpClient.post("http://localhost:3000/submittedEmails", mail);
  }



  updateMail(mail: any) {
    return this._httpClient.put("http://localhost:3000/submittedEmails/" + mail.id, mail);
  }


}


  // ----------
