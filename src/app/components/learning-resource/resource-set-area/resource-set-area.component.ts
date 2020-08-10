import { Component, OnInit, Input } from '@angular/core';
import { ResourceSet } from '../../../interfaces/resource-set.interface';

@Component({
  selector: 'app-resource-set-area',
  templateUrl: './resource-set-area.component.html',
  styleUrls: ['./resource-set-area.component.less'],
})
export class ResourceSetAreaComponent implements OnInit {
  @Input() resourceSet: ResourceSet[];

  constructor() {}

  ngOnInit(): void {}
}
