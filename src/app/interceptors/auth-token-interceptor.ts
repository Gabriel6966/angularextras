import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('TOKEN');
  if(token){
    const tokenRequest = req.clone({
      setHeaders:{
        Authorization: "Bearer " + token
      }
    })
    return next(tokenRequest);
  }
  return next(req).pipe(

  );
};
