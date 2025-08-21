import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reccommended } from './reccommended';

describe('Reccommended', () => {
  let component: Reccommended;
  let fixture: ComponentFixture<Reccommended>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reccommended]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reccommended);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
