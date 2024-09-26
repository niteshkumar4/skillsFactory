import { Component } from '@angular/core';
import { HeaderStyleTwoComponent } from '../header-style-two/header-style-two.component';
import { BecomeInstructorPartnerComponent } from '../become-instructor-partner/become-instructor-partner.component';
import { FeedbackStyleTwoComponent } from '../feedback-style-two/feedback-style-two.component';
import { PartnerStyleOneComponent } from '../partner-style-one/partner-style-one.component';
import { InstructorsStyleTwoComponent } from '../instructors-style-two/instructors-style-two.component';
import { OurValuesComponent } from '../our-values/our-values.component';
import { FunfactsComponent } from '../funfacts/funfacts.component';
import { OurStoryComponent } from '../our-story/our-story.component';
import { OurMissionComponent } from '../our-mission/our-mission.component';
import { RouterLink } from '@angular/router';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
  selector: 'app-our-missions',
  standalone: true,
  imports: [
    HeaderStyleTwoComponent,
    BecomeInstructorPartnerComponent,
    FeedbackStyleTwoComponent,
    PartnerStyleOneComponent,
    InstructorsStyleTwoComponent,
    OurValuesComponent,
    FunfactsComponent,
    OurStoryComponent,
    OurMissionComponent,
    RouterLink,
],
  templateUrl: './our-missions.component.html',
  styleUrl: './our-missions.component.scss'
})
export class OurMissionsComponent {
    isToggled = false;

    constructor(public themeService: ThemeCustomizerService) {
        this.themeService.isToggled$.subscribe((isToggled) => {
            this.isToggled = isToggled;
        });
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
