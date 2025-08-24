import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetter2 } from './news-letter2';

describe('NewsLetter2', () => {
  let component: NewsLetter2;
  let fixture: ComponentFixture<NewsLetter2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsLetter2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsLetter2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
