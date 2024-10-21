import { Component } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-community-groups-forums',
  standalone: true,
  imports: [HeaderStyleTwoComponent, RouterLink],
  templateUrl: './community-groups-forums.component.html',
  styleUrl: './community-groups-forums.component.scss'
})
export class CommunityGroupsForumsComponent {
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
