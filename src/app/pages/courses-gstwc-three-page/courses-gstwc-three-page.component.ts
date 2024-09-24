import { Component } from '@angular/core';
import { HeaderStyleThreeComponent } from '../../common/header-style-three/header-style-three.component';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-gstwc-three-page',
    standalone: true,
    imports: [HeaderStyleThreeComponent, RouterLink],
    templateUrl: './courses-gstwc-three-page.component.html',
    styleUrl: './courses-gstwc-three-page.component.scss'
})
export class CoursesGstwcThreePageComponent {

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