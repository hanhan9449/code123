import { Component, OnInit } from '@angular/core';
import { LearningResourceService } from './learning-resource.service';
import { Observable } from 'rxjs';
import { ResourceSet } from '../../interfaces/resource-set.interface';

@Component({
  selector: 'app-learning-resource',
  templateUrl: './learning-resource.component.html',
  styleUrls: ['./learning-resource.component.less'],
})
export class LearningResourceComponent implements OnInit {
  resourceSets$: Observable<ResourceSet[]>;
  constructor(private readonly service: LearningResourceService) {}

  ngOnInit(): void {
    this.resourceSets$ = this.service.getResourceSets();
  }
}
