import { Component , OnInit } from '@angular/core';
import { ApiService } from "./api.service"
import { MyNewInterface } from "./my-new-interface";
import { error } from 'util';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ApiService]
})

 
export class AppComponent implements OnInit {
 
   title = 'app works!';
   users;
 
   constructor(private userService: UserService) {
   }
 
   ngOnInit() {
    console.log(this.users)
      this.userService.getUsers().subscribe(p=>this.users = p );

      console.log(JSON.stringify(this.users));
   }
}

