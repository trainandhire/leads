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

  getmailSubmissions(uid) {
    return this._afs.collection('mailTestSubmissions').doc(uid).snapshotChanges();
  }

  mailSubmission(uid, data) {
    return this._afs.collection('mailTestSubmissions').doc(uid).set(
      data
    );
  }

  // -------------------

  getSubmittedMails() {
    return this._httpClient.get("http://localhost:3000/submittedEmails");
  }


  CreateMail() {
    return this._httpClient.post("http://localhost:3000/submittedEmails",
      {
        "from": "surya@gmail.com",
        "to": "mohith.r@mohith.com",
        "cc": "shyam.s@capgemini.com,radha.n@capgemini.com",
        "subject": "Application of short Leave,",
        "salutation": "Hi Mohith",
        "body": "I am requesting for long leave in the month of October because we were planning a trip to the north of India with my family from the date (19/08/23) to (25/08/23). So, I am kindly requesting permission to take the leave.",
        "signature": "Thanks & Regards,surya,UI Developer.",
        "mail-Id": "mailId-2",
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
    );
  }
}
