import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTutorialComponent } from './delete-tutorial.component';

describe('DeleteTutorialComponent', () => {
  let component: DeleteTutorialComponent;
  let fixture: ComponentFixture<DeleteTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteTutorialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
