import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFunctionalityFormComponent } from './update-functionality-form.component';

describe('UpdateFunctionalityFormComponent', () => {
  let component: UpdateFunctionalityFormComponent;
  let fixture: ComponentFixture<UpdateFunctionalityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFunctionalityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFunctionalityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
