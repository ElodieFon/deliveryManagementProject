import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSingleComponent } from './component-single.component';

describe('ComponentSingleComponent', () => {
  let component: ComponentSingleComponent;
  let fixture: ComponentFixture<ComponentSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
