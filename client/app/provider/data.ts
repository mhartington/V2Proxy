import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class Data {

  constructor(public http: Http) { }

  load() {
    return this.http.get('/api/feed')
      .map((res: Response) => res.json());
  }
}
