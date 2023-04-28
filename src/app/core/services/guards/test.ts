import { inject } from "@angular/core";
import { AuthInjectableService } from "./auth-injectable/auth-injectable.service";
import { Router } from "@angular/router";


export const guard = () => {
    const auth = inject(AuthInjectableService);
    const router = inject(Router);
    
    return auth.isAllowed();
}