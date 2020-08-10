import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceSetAreaComponent } from './resource-set-area.component';

describe('ResourceSetAreaComponent', () => {
  let component: ResourceSetAreaComponent;
  let fixture: ComponentFixture<ResourceSetAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceSetAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceSetAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
