import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEvent2Component } from './single-event2.component';

describe('SingleEvent2Component', () => {
  let component: SingleEvent2Component;
  let fixture: ComponentFixture<SingleEvent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleEvent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleEvent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
