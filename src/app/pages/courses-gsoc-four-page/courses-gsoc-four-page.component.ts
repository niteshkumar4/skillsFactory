import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleOneComponent } from '../../common/header-style-one/header-style-one.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-gsoc-four-page',
    standalone: true,
    imports: [HeaderStyleOneComponent, RouterLink],
    templateUrl: './courses-gsoc-four-page.component.html',
    styleUrl: './courses-gsoc-four-page.component.scss'
})
export class CoursesGsocFourPageComponent {

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