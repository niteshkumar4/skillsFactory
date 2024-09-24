import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homethree-courses',
    standalone: true,
    imports: [NgClass, RouterLink, NgIf],
    templateUrl: './homethree-courses.component.html',
    styleUrls: ['./homethree-courses.component.scss']
})
export class HomethreeCoursesComponent {

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

    // for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}