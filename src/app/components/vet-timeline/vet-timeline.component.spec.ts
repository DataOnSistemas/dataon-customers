import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetTimelineComponent } from './vet-timeline.component';

describe('VetTimelineComponent', () => {
  let component: VetTimelineComponent;
  let fixture: ComponentFixture<VetTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VetTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VetTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
