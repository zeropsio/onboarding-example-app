import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface Record {
  title: string;
  desc: string;
}

@Injectable({ providedIn: 'root' })
export class RecordsService {

  private _endpoint = environment.apiEndpoint;

  constructor(private _httpClient: HttpClient) {}

  get$() {
    return this._httpClient.get<Record>(this._endpoint);
  }

}
