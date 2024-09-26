import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCoreValuesComponent } from './our-core-values.component';

describe('OurCoreValuesComponent', () => {
  let component: OurCoreValuesComponent;
  let fixture: ComponentFixture<OurCoreValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCoreValuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCoreValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
