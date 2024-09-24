import { Component } from '@angular/core';
import { CommonModule, NgIf, ViewportScroller } from '@angular/common';
import { RouterOutlet, Router, Event, NavigationEnd } from '@angular/router';
import { ThemeCustomizerComponent } from './common/theme-customizer/theme-customizer.component';
import { FooterComponent } from './common/footer/footer.component';
import { ThemeCustomizerService } from './common/theme-customizer/theme-customizer.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, CommonModule, ThemeCustomizerComponent, NgIf, FooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {

    location: any;
    title = 'Ednuv - Angular 18 Education LMS & Online Courses Template';

    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller,
        public themeService: ThemeCustomizerService
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                // Scroll to the top after each navigation end
                this.viewportScroller.scrollToPosition([0, 0]);
            }
        });
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    isToggled = false;

    toggleTheme() {
        this.themeService.toggleTheme();
    }

}