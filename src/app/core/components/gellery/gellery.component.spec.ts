import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelleryComponent } from './gellery.component';

describe('GelleryComponent', () => {
  let component: GelleryComponent;
  let fixture: ComponentFixture<GelleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GelleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
