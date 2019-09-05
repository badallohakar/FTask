import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignuploadComponent } from './designupload.component';

describe('DesignuploadComponent', () => {
  let component: DesignuploadComponent;
  let fixture: ComponentFixture<DesignuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
