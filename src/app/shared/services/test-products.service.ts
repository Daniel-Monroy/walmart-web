import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class TestProductService {

    constructor(private http: HttpClient) {
    }
    
    getData(): Observable<any> {

        const uri = 'http://localhost:8080/api/searchArray';

        const data = {
            arrayA: [
                'tomato',
            ],
            arrayB: [
                'tomato',
            ],
        };

        return this.http.post(uri, data);
    }

}
