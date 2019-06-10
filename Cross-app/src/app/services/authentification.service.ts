import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor() { }

    signUpUser(email,password){
     return new Promise((resolve,reject) =>{
       firebase.auth().createUserWithEmailAndPassword(email,password)
           .then(user=>{
             resolve(user)
           }).catch(err=>{
             reject(err);
       })
      }
     )
    }

  signInUser(email,password){
    return new Promise((resolve,reject) =>{
          firebase.auth().signInWithEmailAndPassword(email,password)
              .then(user=>{
                resolve(user)
              }).catch(err=>{
            reject(err);
          })
        }
    )
  }

  signOut(){
    firebase.auth().signOut()
  }
}
