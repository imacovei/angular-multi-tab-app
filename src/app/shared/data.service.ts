import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class DataService
{
    errorMsg: string = '';

    constructor(private http: HttpClient)
    {
    }

    getBackendData(url: string, paramNames: string[], paramValues: string[])
    {
        const headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        let params = new HttpParams();
        for (const i in paramNames)
        {
            if (paramNames.hasOwnProperty(i))
            {
                params = params.set(paramNames[i], paramValues[i]);
            }
        }

        return this.http.get<{ response: Object }>(url, { headers, params })
            .pipe(map(x => 
            {
                return new MappedClass(x);
            }));
    }
}

export class MappedClass
{
    public dataItems: Array<any> = [];
    constructor(x: any) 
    {
        for (let i = 0; i < x.length; i++)
        {
            this.dataItems.push(x[i]);
        }
    }
}