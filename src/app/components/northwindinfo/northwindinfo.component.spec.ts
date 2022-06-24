import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthwindinfoComponent } from './northwindinfo.component';

describe('NorthwindinfoComponent', () => {
  let component: NorthwindinfoComponent;
  let fixture: ComponentFixture<NorthwindinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NorthwindinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthwindinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
