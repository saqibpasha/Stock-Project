import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEditIpoComponent } from './list-edit-ipo.component';

describe('ListEditIpoComponent', () => {
  let component: ListEditIpoComponent;
  let fixture: ComponentFixture<ListEditIpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEditIpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEditIpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
