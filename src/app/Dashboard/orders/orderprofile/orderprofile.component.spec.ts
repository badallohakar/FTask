import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderprofileComponent } from './orderprofile.component';

describe('OrderprofileComponent', () => {
  let component: OrderprofileComponent;
  let fixture: ComponentFixture<OrderprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
