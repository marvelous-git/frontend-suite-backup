import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { JwtService } from '@frontend-suite/shared/util-auth';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {
  constructor(private jwtService: JwtService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((response: any) => {
        if (response.body && response.body.statusCode === 401) {
          throw new Error(response.body.message);
        }
        return response;
      }),
      catchError((response: any) => {
        if (response instanceof HttpErrorResponse && response.status === 401) {
          this.jwtService.destroyToken();
          this.router.navigateByUrl('/');
        }
        return throwError(response);
      })
    );
  }
}
