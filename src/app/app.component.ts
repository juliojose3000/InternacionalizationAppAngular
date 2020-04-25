// app.component.ts

import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    template: `
        <div style="text-align:center">
            <h1 (click)="toogleLanguage()">
                {{ 'home.title' | translate }}
            </h1>
            <select
                [(ngModel)]="selectedLanguage"
                (ngModelChange)="toogleLanguage($event)">
                <option value="es">
                    {{ 'home.spanishLabel' | translate }}
                </option>
                <option value="en">
                    {{ 'home.englishLabel' | translate }}
                </option>
            </select>
        </div>    `,
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    selectedLanguage = 'es';

    constructor(private translateService: TranslateService) {
        this.translateService.setDefaultLang(this.selectedLanguage);
        this.translateService.use(this.selectedLanguage);
    }

    toogleLanguage(lang: string) {
        this.translateService.use(lang);
    }
}