import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { CookiesService } from "../../services/cookies/cookies.service";
import { Router } from "@angular/router";
import { EnumCookie } from "../../services/cookies/cookie.enum";
import { ToastService } from "../../services/toast/toast.service";
import { environment } from "../../../envoronments/environment.development";




@Injectable({
    providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {

    constructor(private readonly toastService: ToastService){}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cookiesService = inject(CookiesService);
        const router = inject(Router);
        
        let headers = new HttpHeaders();
        headers = headers.set('Authorization',"Bearer " + cookiesService.get(EnumCookie.AUTHORIZATION));

        const requestHandle: HttpRequest<any> = request.clone({
            url: `${environment.apiUrl}/${request.url}`,
            headers: headers
          });

        return next.handle(requestHandle).pipe(
            catchError((error: HttpErrorResponse) => {
              this.toastService.error({
                summary: "Error",
                detail: error.error.message
              });
              if(error.error.status === 401){
                cookiesService.delete(EnumCookie.AUTHORIZATION);
                router.navigate(['login']);
              }
              return throwError(() => error.error.message);
            })
        );
    }
    
}