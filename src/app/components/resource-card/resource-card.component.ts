import {
  Component,
  OnInit,
  Input,
  ElementRef,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { Resource } from 'src/app/interfaces/resource.interface';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.less'],
})
export class ResourceCardComponent implements OnInit, AfterViewInit {
  @Input() resource: Resource;
  imgUrl: string;

  constructor(private elementRef: ElementRef) {}

  @HostListener('click', ['$event']) onClick(event) {
    // console.log('component is clicked');
    window.open(this.resource.link, '_blank');
  }
  ngOnInit(): void {
    this.imgUrl = this.randomPic();
  }
  ngAfterViewInit(): void {
    // this.elementRef.nativeElement
    // .
    //   .addEventListener('click', this.onClick.bind(this));
  }
  // onClick(e) {
  //   console.log(e);
  // }
  randomPic(): string {
    let num = ~~(Math.random() * 100);
    return `https://picsum.photos/200/140?random=${num}`;
  }
}
