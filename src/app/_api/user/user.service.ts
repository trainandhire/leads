import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  ref = firebase.firestore().collection('users');

  constructor(private firestore: AngularFirestore) {
  }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();
  }

  getCurrentUser(userId): Observable<any> {
    return of("")
    // return this.firestore.collection('users', ref => ref.where('uid', '==', userId)).snapshotChanges();
  }

  createUser(user) {
    return this.ref.add(user);
  }

  // User details from local storage
  getCurrentUserId(){
    return JSON.parse(localStorage.getItem("currentUser")).uid;
  }

  getCid(){
    return JSON.parse(localStorage.getItem("currentUser")).cid;
  }

}
