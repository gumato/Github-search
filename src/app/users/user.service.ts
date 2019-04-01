import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private username: string;
  private clientid = '22ed7c527a0c22820fca';
  private clientsecret = '608ba505507af8e4ea055de32366e6047ad42134';

  constructor(private http: HttpClient) {
      console.log('Ready for display');
      this.username = 'gumato';
 }
 getprofileInfo(username) {
   console.log(this.username);
   // tslint:disable-next-line:max-line-length
   return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);

 }
 getprofileRepos() {
// tslint:disable-next-line:max-line-length
return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);


   }

 updateprofile(username: string) {
   this.username = username;
 }

}
