import { Injectable } from '@angular/core';
import { Widget } from '../models/widget.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  baseApiUrl: string = "https://localhost:44381";

  constructor(private http: HttpClient) { }

  getAllWidget(): Observable<Widget[]> {
    return this.http.get<Widget[]>(this.baseApiUrl + '/api/widget');
  }

  addWidget(newWidget: Widget): Observable<Widget> {
    newWidget.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Widget>(this.baseApiUrl + '/api/widget', newWidget);
  }

  getWidget(id: string): Observable<Widget> {
    return this.http.get<Widget>(this.baseApiUrl + '/api/widget/' + id);
  }

  updateWidget(id: string, updateWidgetRequest: Widget): Observable<Widget> {
    return this.http.put<Widget>(this.baseApiUrl + '/api/widget/' + id, updateWidgetRequest);
  }

  deleteWidget(id: string): Observable<Widget> {
    return this.http.delete<Widget>(this.baseApiUrl + '/api/widget/' + id);
  }

}
