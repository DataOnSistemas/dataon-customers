import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuItensComponent } from './sidebar-menu-itens.component';

describe('SidebarMenuItensComponent', () => {
  let component: SidebarMenuItensComponent;
  let fixture: ComponentFixture<SidebarMenuItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarMenuItensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarMenuItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
