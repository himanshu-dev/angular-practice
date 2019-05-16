import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCallerService {
  baseUrl = 'https://vue-http-136db.firebaseio.com/todo.json';

  constructor(private http: Http) {
  }

  saveTasks(tasks: string[]): Observable<any> {
    const myHeaders = new Headers({'Content-Type': 'application/json'});
    return this.http.put(this.baseUrl, tasks, {
      headers: myHeaders
    });
  }

  getTasks(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
