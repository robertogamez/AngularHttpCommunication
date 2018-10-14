import {
    Injectable
} from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpEventType
} from '@angular/common/http';
import {
    Observable
} from 'rxjs/observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogResponseInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ) {
        console.log(`LogResponseInterceptor - ${req.url}`);

        return next.handle(req)
            .pipe(
                tap(event => {
                    if(event.type === HttpEventType.Response){
                        console.log(event.body);
                    }
                })
            )
    }
}