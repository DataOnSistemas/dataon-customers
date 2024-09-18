import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCompaniesComponent } from './cards-companies.component';

describe('CardsCompaniesComponent', () => {
  let component: CardsCompaniesComponent;
  let fixture: ComponentFixture<CardsCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
