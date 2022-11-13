import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = "https://localhost:44378";

// var apiUrl = "http://192.168.10.10:105";

var httpLink = {
  getAllEmployee: apiUrl + "/api/Employee",
  deleteEmployeeById: apiUrl + "/api/Employee",
  getEmployeeDetailById: apiUrl + "/api/Employee",
  saveEmployee: apiUrl + "/api/Employee"
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllEmployee(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);
  }

  public deleteEmployeeById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteEmployeeById + '?employeeId=' + model , '');
  }

  public getEmployeeDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getEmployeeDetailById + '?employeeId=' + model);
  }

  public saveEmployee(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }

}
