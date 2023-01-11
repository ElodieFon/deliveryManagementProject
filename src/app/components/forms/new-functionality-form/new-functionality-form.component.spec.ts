import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFunctionalityFormComponent } from './new-functionality-form.component';

describe('NewFunctionalityFormComponent', () => {
  let component: NewFunctionalityFormComponent;
  let fixture: ComponentFixture<NewFunctionalityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFunctionalityFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFunctionalityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
