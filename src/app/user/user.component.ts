import { Component, OnInit } from '@angular/core'
import {UserService} from '../users/user.service';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
profile: any = [];
repos: any = [];
username: string;

constructor(private UserService: UserService) { }

ngOnInit() {



}


findprofile() {
 this.UserService.updateprofile(this.username);
 this.UserService.getprofileInfo(this.username).subscribe(profile => {
   console.log(profile);
   this.profile = profile;
});
 this.UserService.getprofileRepos().subscribe(repos => {
   console.log(repos);
   this.repos = repos;
 });

}
}
