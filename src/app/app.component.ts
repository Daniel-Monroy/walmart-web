import {HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {TestProductService} from './shared/services/test-products.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TestProductService]

})
export class AppComponent implements OnInit {
    title = 'web';

    constructor(
        private testService: TestProductService, 
    ) {
    }

    response: any;

    ngOnInit():void {

        this.testService.getData().subscribe(response => {
            this.response = response.count;
            console.log(JSON.stringify(response, null, 4))
        })
    }
}
