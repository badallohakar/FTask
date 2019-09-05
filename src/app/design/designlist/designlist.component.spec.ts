import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignlistComponent } from './designlist.component';

describe('DesignlistComponent', () => {
  let component: DesignlistComponent;
  let fixture: ComponentFixture<DesignlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
