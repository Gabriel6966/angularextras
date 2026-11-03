import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core/primitives/di';
import { Router } from '@angular/router';
import { ToastService } from 'ngx-yet-another-toast-library';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService: ToastService = inject(ToastService);
  const _router: Router = inject(Router);


  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      toastService.error(error.message)
      _router.navigate(['/error']);
      console.log("tipo de error: ", error.status);
      console.log("mensaje de error:" + error.message);

      return throwError(()=> error);
    })
  );
};
