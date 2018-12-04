import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {
  }

  /**
   * @return a list of users
   */
  getUsers(): Observable<any> {
    return this.http.get('/api/users/');
  }

  /**
   * @param query Filter by partial alias match
   * @return expanded list of users
   */
  searchUsers(query: string): Observable<any> {
    return this.http.get('/api/users?expand=profile&search=' + query);
  }

  /**
   * @param userID ID of a specific User
   * @param options The options for the request
   * @return Retrieves a specific user
   */
  getUser(userID: string, options?: object): Observable<any> {
    return this.http.get('/api/users/' + userID, options || {});
  }

  /**
   * @param user specific user's profile
   * @return followers of that user
   */
  getFollowersOfUser(user: User): Observable<any> {
    return this.http.get('/api/users/' + user.id + '/followers');
  }

  /**
   * @param user specific user's profile
   * @return the user's following
   */
  getUserFollows(user: User): Observable<any> {
    return this.http.get('/api/users/' + user.id + '/follows');
  }
}
