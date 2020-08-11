import { Component, OnInit, Input } from '@angular/core';
import { Resource } from 'src/app/interfaces/resource.interface';

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.less'],
})
export class ResourceCardComponent implements OnInit {
  @Input() resource: Resource;
  constructor() {}

  ngOnInit(): void {}
  randomPic(): string {
    let num = ~~(Math.random() * 100);
    return `https://picsum.photos/200/140?random=${num}`;
  }
}
