import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offers3 } from './offers3';

describe('Offers3', () => {
  let component: Offers3;
  let fixture: ComponentFixture<Offers3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Offers3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Offers3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
