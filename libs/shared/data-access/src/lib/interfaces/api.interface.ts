import { HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContentType } from '@frontend-suite/shared/util-entities';

export interface Api {
  get(
    path: string,
    params?: HttpParams,
    headers?: HttpHeaders
  ): Observable<any>;
  put(path: string, body: object, headers?: HttpHeaders): Observable<any>;
  post(path: string, body: object, headers?: HttpHeaders): Observable<any>;
  file(
    path: string,
    file: File,
    filePropertyName: string,
    body?: object
  ): Observable<any>;
  delete(path, headers?: HttpHeaders): Observable<any>;
}
