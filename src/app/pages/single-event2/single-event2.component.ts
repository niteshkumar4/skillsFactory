import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-event2',
  standalone: true,
  imports: [HeaderStyleTwoComponent, RouterLink],
  templateUrl: './single-event2.component.html',
  styleUrl: './single-event2.component.scss'
})
export class SingleEvent2Component {

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
