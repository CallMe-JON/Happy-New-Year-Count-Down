import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Messange } from './messange';

describe('Messange', () => {
  let component: Messange;
  let fixture: ComponentFixture<Messange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Messange]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Messange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
