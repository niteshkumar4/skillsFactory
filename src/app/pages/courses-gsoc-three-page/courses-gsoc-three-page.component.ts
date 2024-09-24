import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleThreeComponent } from '../../common/header-style-three/header-style-three.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-gsoc-three-page',
    standalone: true,
    imports: [HeaderStyleThreeComponent, RouterLink],
    templateUrl: './courses-gsoc-three-page.component.html',
    styleUrl: './courses-gsoc-three-page.component.scss'
})
export class CoursesGsocThreePageComponent {

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