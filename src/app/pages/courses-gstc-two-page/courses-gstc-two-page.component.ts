import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-gstc-two-page',
    standalone: true,
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './courses-gstc-two-page.component.html',
    styleUrl: './courses-gstc-two-page.component.scss'
})
export class CoursesGstcTwoPageComponent {

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