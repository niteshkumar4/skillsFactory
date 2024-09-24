import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hometwelve-blog',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './hometwelve-blog.component.html',
    styleUrls: ['./hometwelve-blog.component.scss']
})
export class HometwelveBlogComponent {

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