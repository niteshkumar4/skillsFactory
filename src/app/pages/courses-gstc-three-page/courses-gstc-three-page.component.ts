import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleThreeComponent } from '../../common/header-style-three/header-style-three.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-courses-gstc-three-page',
    standalone: true,
    imports: [HeaderStyleThreeComponent, RouterLink],
    templateUrl: './courses-gstc-three-page.component.html',
    styleUrl: './courses-gstc-three-page.component.scss'
})
export class CoursesGstcThreePageComponent {

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