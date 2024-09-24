import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homethirteen-courses',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './homethirteen-courses.component.html',
    styleUrls: ['./homethirteen-courses.component.scss']
})
export class HomethirteenCoursesComponent {

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