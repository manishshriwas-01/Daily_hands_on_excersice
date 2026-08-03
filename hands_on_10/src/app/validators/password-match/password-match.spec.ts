import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordMatch } from './password-match';

describe('PasswordMatch', () => {
  let component: PasswordMatch;
  let fixture: ComponentFixture<PasswordMatch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordMatch],
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordMatch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
