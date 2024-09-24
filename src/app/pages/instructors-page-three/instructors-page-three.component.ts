import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleOneComponent } from '../../common/header-style-one/header-style-one.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-instructors-page-three',
    standalone: true,
    imports: [HeaderStyleOneComponent, BecomeInstructorPartnerComponent, RouterLink],
    templateUrl: './instructors-page-three.component.html',
    styleUrls: ['./instructors-page-three.component.scss']
})
export class InstructorsPageThreeComponent {

    isToggled = false;
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}