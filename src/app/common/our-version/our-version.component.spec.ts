import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurVersionComponent } from './our-version.component';

describe('OurVersionComponent', () => {
  let component: OurVersionComponent;
  let fixture: ComponentFixture<OurVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurVersionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
