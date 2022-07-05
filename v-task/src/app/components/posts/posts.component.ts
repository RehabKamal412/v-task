import { Comments } from 'src/app/models/comments-model';
import { UserCommentsService } from './../../services/user-comments.service';
import { Comment } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserPosts } from 'src/app/models/user-posts';
import { Users } from 'src/app/models/users';
import { GetUsersService } from 'src/app/services/get-users.service';
import { PostsService } from 'src/app/services/posts.service';
import { UserImageService } from 'src/app/services/user-image.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:UserPosts[]=[];


  userId:number;
  images:any;
  user:Users;
  showComments:boolean=true;
  comments: Comments[] =[]
  // filteredComments : Comments[]

  constructor(private postService:PostsService, private activatedRoute: ActivatedRoute,
    private imageService:UserImageService, private userService:GetUsersService, private router:Router,
    private userComment: UserCommentsService ) { }

  ngOnInit(): void {

    this.getUserInfo();
    this.getPostsById();
    this.getImages();


  }

  getPostsById()
  {
      this.userService.userId$.subscribe(id=>{
        this.userId = id
        console.log(id)
      this.postService.getUserPosts(id).subscribe(posts=>{
        this.posts = posts;
        // console.log(this.posts +'posts');
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


  getUserInfo(){
    this.userService.userId$.subscribe(id=>{
      this.userService.getUser(id).subscribe(user=>{
        this.user= user
        console.log(this.user)
      })
    })
  }

  showUserComments(id: number){

        console.log(id)
        this.userComment.getUserComments(id).subscribe(Comment=>{
          this.comments = Comment
          console.log(this.comments)

        })
  }


}
