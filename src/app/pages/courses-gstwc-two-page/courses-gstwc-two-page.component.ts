import { Component } from '@angular/core';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-gstwc-two-page',
    standalone: true,
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './courses-gstwc-two-page.component.html',
    styleUrl: './courses-gstwc-two-page.component.scss'
})
export class CoursesGstwcTwoPageComponent {

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

    ngOnInit(): void {}

}