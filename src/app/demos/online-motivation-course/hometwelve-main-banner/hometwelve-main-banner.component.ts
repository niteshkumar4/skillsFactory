import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-hometwelve-main-banner',
    standalone: true,
    imports: [RouterLink, NgIf],
    templateUrl: './hometwelve-main-banner.component.html',
    styleUrls: ['./hometwelve-main-banner.component.scss']
})
export class HometwelveMainBannerComponent {

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

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}