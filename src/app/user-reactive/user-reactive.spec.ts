import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReactive } from './user-reactive';

describe('UserReactive', () => {
  let component: UserReactive;
  let fixture: ComponentFixture<UserReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReactive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
