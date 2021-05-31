import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiURL="/api/sms";

  constructor(private http: HttpClient) { }

  // Send SMS
  persist(sms){
    return this.http.post(`${this.apiURL}/send/twilio`, sms);
  }
}
