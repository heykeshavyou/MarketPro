import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Offers2 } from './offers2';

describe('Offers2', () => {
  let component: Offers2;
  let fixture: ComponentFixture<Offers2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Offers2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Offers2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
