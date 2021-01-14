import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ProfileUpdateInterface} from '../interfaces/profileUpdate.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient
  ) { }

  updateProfile(profileChanges: ProfileUpdateInterface): Observable<any> {
    return this.httpClient.patch(
      `${environment.api}/api/profile`,
      profileChanges
    );
  }
}
