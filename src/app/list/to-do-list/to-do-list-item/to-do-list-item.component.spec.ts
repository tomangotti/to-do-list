import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListItemComponent } from './to-do-list-item.component';

describe('ToDoListItemComponent', () => {
  let component: ToDoListItemComponent;
  let fixture: ComponentFixture<ToDoListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoListItemComponent]
    });
    fixture = TestBed.createComponent(ToDoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
