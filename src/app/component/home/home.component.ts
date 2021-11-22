import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slide1:boolean=true;
  slide2:boolean=false;
  slide3:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  showslide1(){
    this.slide2 = !this.slide2;
    this.slide1 =!this.slide1; 
    this.slide3 =false;
    this.slide1 =false;
  }

  showslide2(){
    this.slide2 =false;
    this.slide3 =!this.slide3;
    this.slide1 =false;
  }
  showslide3(){
    this.slide1 =!this.slide1;
    this.slide1 =false;
    this.slide2 =false;
  }

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}
