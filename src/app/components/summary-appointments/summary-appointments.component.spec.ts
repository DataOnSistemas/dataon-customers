import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAppointmentsComponent } from './summary-appointments.component';

describe('SummaryAppointmentsComponent', () => {
  let component: SummaryAppointmentsComponent;
  let fixture: ComponentFixture<SummaryAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummaryAppointmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SummaryAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
