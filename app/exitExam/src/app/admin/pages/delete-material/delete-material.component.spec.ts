import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMaterialComponent } from './delete-material.component';

describe('DeleteMaterialComponent', () => {
  let component: DeleteMaterialComponent;
  let fixture: ComponentFixture<DeleteMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
