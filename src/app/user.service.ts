import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { User } from './user';

 
@Injectable()
export class UserService {
   constructor(private http: Http) {
   }
 
   getUsers(): Observable<User[]> {
      return this.http.get("https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=chiru&nojsoncallback=1")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}