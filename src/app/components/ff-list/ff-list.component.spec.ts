import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfListComponent } from './ff-list.component';

describe('FfListComponent', () => {
  let component: FfListComponent;
  let fixture: ComponentFixture<FfListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
