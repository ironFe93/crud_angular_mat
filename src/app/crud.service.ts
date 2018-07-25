import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url = 'https://reqres.in/';

  constructor(private http: HttpClient) { }

  create(user: User) {
    return this.http.post<User>(this.url + 'api/users', user);
  }

  read(id: number) {
    return this.http.get<any>(this.url + 'api/users/' + id);
  }

  update(user: User) {
    return this.http.put<User>(this.url + 'api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete<any>(this.url + 'api/users/delete/' + id, { observe: 'response' });
  }
}
