import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegustationService {

  constructor() { }

  createUser(body) {
    const response = {
      status: 1,
      data: body,
      message: 'User created successfully'
    }
    return of(response);
  }
}
