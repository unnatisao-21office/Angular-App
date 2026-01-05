import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicCssClass } from './dynamic-css-class';

describe('DynamicCssClass', () => {
  let component: DynamicCssClass;
  let fixture: ComponentFixture<DynamicCssClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicCssClass]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicCssClass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
