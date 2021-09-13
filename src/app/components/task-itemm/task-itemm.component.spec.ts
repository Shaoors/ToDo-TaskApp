import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskItemmComponent } from './task-itemm.component';

describe('TaskItemmComponent', () => {
  let component: TaskItemmComponent;
  let fixture: ComponentFixture<TaskItemmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskItemmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskItemmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
