import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Result } from '@frontend-suite/shared/util-entities';
import { Api } from '../interfaces';
import { objectToFormData } from '../services';

export abstract class BaseApi implements Api {
  protected server: string;

  constructor(private http: HttpClient) {}

  get<T>(
    path: string,
    params: HttpParams = new HttpParams(),
    headers: object = {}
  ): Observable<Result & T> {
    return this.http
      .get<Result & T>(`${this.server}${path}`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': `application/json`,
          ...headers
        },
        params: params
      })
      .pipe(catchError(this.formatErrors));
  }

  put<T>(
    path: string,
    body: object = {},
    headers: object = {}
  ): Observable<Result & T> {
    return this.http
      .put<Result & T>(`${this.server}${path}`, JSON.stringify(body), {
        headers: {
          Accept: 'application/json',
          'Content-Type': `application/json`,
          ...headers
        }
      })
      .pipe(catchError(this.formatErrors));
  }

  post<T>(
    path: string,
    body: object | FormData | string = {},
    headers: object = {}
  ): Observable<Result & T> {
    return this.http
      .post<Result & T>(
        `${this.server}${path}`,
        headers['Content-Type'] === `application/json`
          ? JSON.stringify(body)
          : body,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': `application/json`,
            ...headers
          }
        }
      )
      .pipe(catchError(this.formatErrors));
  }

  file<T>(
    path: string,
    file: File,
    filePropertyName: string = 'document',
    body?: object
  ): Observable<Result & T> {
    let formData: FormData;
    if (!body || Object.keys(body).length === 0) {
      formData = new FormData();
    } else {
      formData = objectToFormData(body);
    }
    formData.append(filePropertyName, file, file.name.split('.')[0]);

    return this.http
      .post<Result & T>(`${this.server}${path}`, formData)
      .pipe(catchError(this.formatErrors));
  }

  delete<T>(
    path: any,
    body?: object | FormData | string,
    headers: object = {}
  ): Observable<Result & T> {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': `application/json`,
        ...headers
      }),
      body
    };

    return this.http
      .delete<Result & T>(`${this.server}${path}`, httpOptions)
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: Error) {
    return throwError(error);
  }
}
