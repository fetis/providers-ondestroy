import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeService implements OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    console.log('destroying');
  }
}
