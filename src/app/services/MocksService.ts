import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mock } from '../models/models';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class MocksService {
    private url:string = environment.backendUrl;
    private key:string = environment.apikey;

    constructor(private httpClient: HttpClient) { }
    
    getAll():Observable<Array<Mock>>{
        return this.httpClient.get<Array<Mock>>(this.url, { headers: { 'Ocp-Apim-Subscription-Key': this.key }});
    }
}