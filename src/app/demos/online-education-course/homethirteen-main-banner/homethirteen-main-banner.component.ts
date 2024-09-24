import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homethirteen-main-banner',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './homethirteen-main-banner.component.html',
    styleUrls: ['./homethirteen-main-banner.component.scss']
})
export class HomethirteenMainBannerComponent {

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