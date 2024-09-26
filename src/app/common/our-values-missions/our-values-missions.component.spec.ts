import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurValuesMissionsComponent } from './our-values-missions.component';

describe('OurValuesMissionsComponent', () => {
  let component: OurValuesMissionsComponent;
  let fixture: ComponentFixture<OurValuesMissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurValuesMissionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurValuesMissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
