import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
show1:boolean= true;
show2:boolean= false;
show3:boolean= false;
show4:boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

  Products=[
    {
      'imageUrl':'../../../assets/download (2).jpg ',
      'title':'Street Food',
      'Discription':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis?'
    },
    {
      'imageUrl':'../../../assets/download (7).jpg',
      'title':'Street Food',
      'Discription':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis?'
    },
    {
      'imageUrl':'../../../assets/images7.jpg',
      'title':'Street Food',
      'Discription':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis?'
    },
    {
      'imageUrl':'../../../assets/download (7).jpg',
      'title':'Street Food',
      'Discription':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis?'
    },
    {
      'imageUrl':'../../../assets/download (7).jpg',
      'title':'Street Food',
      'Discription':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis?'
    },
    {
      'imageUrl':'../../../assets/download (7).jpg',
      'title':'Street Food',
      'Discription':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis?'
    },
    {
      'imageUrl':'../../../assets/download (7).jpg',
      'title':'Street Food',
      'Discription':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis?'
    },
    {
      'imageUrl':'../../../assets/download (7).jpg',
      'title':'Street Food',
      'Discription':'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, veritatis?'
    }

  ]
  toggle1(){
    this.show1 =true;
    this.show4 =false;
    this.show3 =false;
    this.show2 =false;
  }
  toggle2(){
    this.show2 =true;
    this.show1 =false;
    this.show4 =false;
    this.show3 =false;
  }
  toggle3(){
    this.show3 =true;
    this.show2 =false;
    this.show1 =false;
    this.show4 =false;
  }
  toggle4(){
    this.show4 =true;
    this.show3 =false;
    this.show2 =false;
    this.show1 =false;
  }


  currentRate = 3;
 
}
