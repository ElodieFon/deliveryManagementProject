import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectFormComponent } from './update-project-form.component';

describe('UpdateProjectFormComponent', () => {
  let component: UpdateProjectFormComponent;
  let fixture: ComponentFixture<UpdateProjectFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProjectFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
