import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackStyleOurCoreComponent } from './feedback-style-our-core.component';

describe('FeedbackStyleOurCoreComponent', () => {
  let component: FeedbackStyleOurCoreComponent;
  let fixture: ComponentFixture<FeedbackStyleOurCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackStyleOurCoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackStyleOurCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
