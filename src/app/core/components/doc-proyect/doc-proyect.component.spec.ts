import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocProyectComponent } from './doc-proyect.component';

describe('DocProyectComponent', () => {
  let component: DocProyectComponent;
  let fixture: ComponentFixture<DocProyectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocProyectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
