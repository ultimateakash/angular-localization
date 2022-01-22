import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private translate: TranslateService) { }

    ngOnInit(): void { }

    handleLanguage = (event: any) => {
        this.translate.use(event.target.value);
    }
}
