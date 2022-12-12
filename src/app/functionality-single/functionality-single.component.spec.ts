import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalitySingleComponent } from './functionality-single.component';

describe('FunctionalitySingleComponent', () => {
  let component: FunctionalitySingleComponent;
  let fixture: ComponentFixture<FunctionalitySingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalitySingleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalitySingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
