import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedashboardComponent } from './ratedashboard.component';

describe('RatedashboardComponent', () => {
  let component: RatedashboardComponent;
  let fixture: ComponentFixture<RatedashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatedashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
