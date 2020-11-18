import { Injectable, Inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  DATA_ACCESS_CONFIGURATION_TOKEN,
  DataAccessConfiguration
} from '../tokens';
import { JwtService, IAuthFacade } from '@frontend-suite/shared/util-auth';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    @Inject(DATA_ACCESS_CONFIGURATION_TOKEN)
    private configuration: DataAccessConfiguration,
    private jwtService: JwtService,
    private authServiice: IAuthFacade
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      this.jwtService.hasValidAccessToken &&
      !req.url.startsWith(`/assets`) &&
      !req.url.endsWith(`oauth/token`)
    ) {
      req = req.clone({
        setHeaders: {
          [this.configuration.authorization.headerType]: `${
            this.configuration.authorization.scheme
          }${this.configuration.authorization.scheme ? ' ' : ''}${
            this.jwtService.token
          }`
        }
      });

      if (this.configuration.useSources) {
        req.clone({
          setHeaders: {
            'Source-Name': `imsHrTestAdmin`,
            'Source-Type': `imsHrTestAdmin`
          }
        });
      }
    }

    return next.handle(req);
  }
}
