import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Emplyoee } from './emplyoee';

describe('Emplyoee', () => {
  let component: Emplyoee;
  let fixture: ComponentFixture<Emplyoee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emplyoee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Emplyoee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
