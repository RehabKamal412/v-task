import { PostsService } from 'src/app/services/posts.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comments } from 'src/app/models/comments-model';
import { Users } from 'src/app/models/users';
import { GetUsersService } from 'src/app/services/get-users.service';
import { UserCommentsService } from 'src/app/services/user-comments.service';
import { UserPosts } from 'src/app/models/user-posts';
import { UserImageService } from 'src/app/services/user-image.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  postId: any;
  users:Users;
  images:any;

  @Input() postComment : Comments[]


  constructor(private commentService:UserCommentsService, private route:ActivatedRoute,
     private userService:GetUsersService,
    private postService : PostsService, private imageService:UserImageService) { }

  ngOnInit(): void {
    // console.log(this.postComment)

    
    this.route.paramMap.subscribe((data) =>{
     this.postId=data.get("id");
    })
    
    this.getUserInfo();   
    this.getImages();
    
  }

  getUserInfo()
  {

    this.userService.userId$.subscribe(id=>{
      this.userService.getUser(id).subscribe(user=>{
        this.users= user
        console.log(this.users);
      })
    })

}

getImages()
{
  this.imageService.getUserImage().subscribe((data)=>{
    this.images=data;
    console.log(this.images);
    
  })
}

}