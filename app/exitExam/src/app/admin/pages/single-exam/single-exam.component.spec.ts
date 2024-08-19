import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleExamComponent } from './single-exam.component';

describe('SingleExamComponent', () => {
  let component: SingleExamComponent;
  let fixture: ComponentFixture<SingleExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleExamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
