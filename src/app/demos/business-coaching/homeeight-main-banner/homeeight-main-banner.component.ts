import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homeeight-main-banner',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './homeeight-main-banner.component.html',
    styleUrls: ['./homeeight-main-banner.component.scss']
})
export class HomeeightMainBannerComponent {

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