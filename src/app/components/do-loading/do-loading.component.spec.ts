import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoLoadingComponent } from './do-loading.component';

describe('DoLoadingComponent', () => {
  let component: DoLoadingComponent;
  let fixture: ComponentFixture<DoLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoLoadingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
