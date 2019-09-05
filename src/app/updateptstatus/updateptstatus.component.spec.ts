import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateptstatusComponent } from './updateptstatus.component';

describe('UpdateptstatusComponent', () => {
  let component: UpdateptstatusComponent;
  let fixture: ComponentFixture<UpdateptstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateptstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateptstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
