
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



export class OperationResponse {
    code: number = 0;
    message: string = '';
    exceptionDetail: string = '';
    object: any = null;
  }
  
  export class Appointment {
    identifier: string = '';
  
    constructor(identifier: string) {
        this.identifier = identifier;
    }
  }

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(private http: HttpClient) {
  }

  public logAppointment(appointment: Appointment): Observable<OperationResponse> {
    return this.http.post<OperationResponse>('log/appointment', appointment);
  }

}
