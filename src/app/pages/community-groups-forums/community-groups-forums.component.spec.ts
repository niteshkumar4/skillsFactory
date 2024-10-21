import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityGroupsForumsComponent } from './community-groups-forums.component';

describe('CommunityGroupsForumsComponent', () => {
  let component: CommunityGroupsForumsComponent;
  let fixture: ComponentFixture<CommunityGroupsForumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommunityGroupsForumsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityGroupsForumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
