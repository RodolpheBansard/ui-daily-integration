import {Component, HostListener, OnInit} from '@angular/core';
import {Review} from "./review";

@Component({
  selector: 'app-culture-built-my-brand',
  templateUrl: './culture-built-my-brand.component.html',
  styleUrls: ['./culture-built-my-brand.component.scss']
})
export class CultureBuiltMyBrandComponent implements OnInit {

  imageOffsetX: number = 0;
  imageOffsetY: number = 0;

  imageRotation = 0;

  reviews: Review[] = [
    {
      content: 'We continue to implement the cultural strategies that Historic has helped us to develop. Culture Built My Brand will revolutionize the way you acquire customers, all thanks to your company culture.',
      authorName: 'Todd Austin',
      authorPosition: 'CEO'
    },
    {
      content: 'Every company has a culture, whether or not it is defined often determines the success. Culture Built My Brand helps business leaders create a culture that is worthy of the vision they have for their company.',
      authorName: 'Todd Austin',
      authorPosition: 'Developer'
    },
    {
      content: 'Every company has a culture, create a culture that is worthy of the vision they have for their company.',
      authorName: 'Todd Austin',
      authorPosition: 'Designer'
    },

  ]

  activeReview!: Review;
  activeReviewNumber = 0;

  isFadingOut = false;
  isFadingIn = false;


  @HostListener('mousemove', ['$event']) onMouseMove(event: { clientX: number; clientY: number; }) {
    this.computeHeroImagePosition(event.clientX,event.clientY);
  }

  @HostListener('window:scroll', ['$event']) scroll(event: { clientX: number; clientY: number; }) {
    this.computeImageRotation();
  }

  constructor() { }

  ngOnInit(): void {
    document.body.style.background = "#FFCC65";

    this.activeReview = this.reviews[0];
  }

  computeHeroImagePosition(mousePosX: number, mousePosY: number){
    const min = -20
    const max = 20

    const x = mousePosX / window.innerWidth;
    const y = mousePosY / window.innerHeight;

    this.imageOffsetX = -x*(min-max)-max;
    this.imageOffsetY = -y*(min-max)-max -20;
  }

  computeImageRotation(){
    const min = -60
    const max = 60
    const scrollPos = window.pageYOffset/(document.documentElement.scrollHeight - window.innerHeight);

    this.imageRotation = -scrollPos*(min-max)-max;
  }

  previousReview(){
    if(this.activeReviewNumber === 0){
      this.activeReviewNumber = this.reviews.length-1;
    }
    else{
      this.activeReviewNumber--;
    }

    this.fadeReview();
  }

  nextReview(){
    if(this.activeReviewNumber === this.reviews.length-1){
      this.activeReviewNumber = 0;
    }
    else{
      this.activeReviewNumber++;
    }
    this.fadeReview();
  }

  fadeReview(){
    this.isFadingOut = true
    setTimeout(()=> {
      this.isFadingOut=false
      this.activeReview = this.reviews[this.activeReviewNumber];
      this.isFadingIn = true;
      setTimeout(()=> {
        this.isFadingIn=false
      },500);
    },500);

  }
}
