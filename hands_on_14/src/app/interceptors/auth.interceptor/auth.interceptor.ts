import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth.service/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

  const token = authService.getToken();

  if (token) {

    const modifiedRequest = req.clone({

      setHeaders: {

        Authorization: `Bearer ${token}`

      }

    });

    console.log('Token Attached');

    return next(modifiedRequest);

  }

  console.log('No Token Found');

  return next(req);

};