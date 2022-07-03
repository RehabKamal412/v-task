import { PostsComponent } from './../posts/posts.component';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { GetUsersService } from 'src/app/services/get-users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  users:Users[]=[];
  userId : number

  constructor(private userData:GetUsersService) { }

  ngOnInit(): void {
    this.userData.getUsersData().subscribe((data)=>
    {
      this.users=data;
      // console.log(this.users);
    })
  }

  sendId(id: number){
    this.userId = id
    this.userData.userId$.next(this.userId);
  }

}
