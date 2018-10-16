import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root'
})
export class EnterDetailsGuardService implements CanActivate {
  constructor(private session: SessionService) {

   }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    
    return true;
  }
}