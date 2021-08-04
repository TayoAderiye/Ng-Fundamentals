import { ComponentFixture, TestBed } from '@angular/core/testing';

import { F404Component } from './f404.component';

describe('F404Component', () => {
  let component: F404Component;
  let fixture: ComponentFixture<F404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ F404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(F404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
