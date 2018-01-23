import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Person} from '../../_models/person';

@Injectable()
export class PeopleService {

  public root_url = 'http://localhost:8000';
  public ApiUrl = 'api/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Person[]>(this.root_url + '/api/people');
  }

  getById(id: number) {
    return this.http.get(this.root_url + '/api/people/' + id);
  }

  create(user: Person) {
    return this.http.post(this.root_url + '/api/people', user);
  }

  update(user: Person) {
    return this.http.put(this.root_url + '/api/people/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete(this.root_url + '/api/people/' + id);
  }
}



