import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';

@Component({
  selector: 'app-feedback-style-our-core',
  standalone: true,
  imports: [CarouselModule, RouterLink],
  templateUrl: './feedback-style-our-core.component.html',
  styleUrl: './feedback-style-our-core.component.scss'
})
export class FeedbackStyleOurCoreComponent {

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

    testimonialsSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		smartSpeed: 500,
		autoplay: true,
		center: true,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
    }
}
