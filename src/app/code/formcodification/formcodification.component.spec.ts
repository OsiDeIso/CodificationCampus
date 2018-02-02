import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcodificationComponent } from './formcodification.component';

describe('FormcodificationComponent', () => {
  let component: FormcodificationComponent;
  let fixture: ComponentFixture<FormcodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
