import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharepointService {

  constructor(private http: HttpClient) { }

  getFileData(){
    return this.http.get(`${environment.sharepointUrl}/_api/web`);
  }
}
