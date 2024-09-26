import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderStyleZeroComponent } from './header-style-zero.component';

describe('HeaderStyleZeroComponent', () => {
  let component: HeaderStyleZeroComponent;
  let fixture: ComponentFixture<HeaderStyleZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderStyleZeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderStyleZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
