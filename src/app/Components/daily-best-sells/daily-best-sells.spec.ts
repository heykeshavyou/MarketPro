import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyBestSells } from './daily-best-sells';

describe('DailyBestSells', () => {
  let component: DailyBestSells;
  let fixture: ComponentFixture<DailyBestSells>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyBestSells]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyBestSells);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
