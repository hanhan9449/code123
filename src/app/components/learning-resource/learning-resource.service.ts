import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourceSet } from '../../interfaces/resource-set.interface';

@Injectable({
  providedIn: 'root',
})
export class LearningResourceService {
  constructor(private readonly http: HttpClient) {}
  getResourceSets(): Observable<ResourceSet[]> {
    // let url = '/assets/mock-data.json';
    let url =
      'https://raw.zme.ink/hanhan9449/code123/master/src/assets/mock-data.json';
    return this.http.get<ResourceSet[]>(url);
  }
}
