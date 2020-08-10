import { Resource } from './resource.interface';

export interface ResourceSet {
  id: string;
  name: string;
  resources: Resource[];
}
