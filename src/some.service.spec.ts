import { TestBed } from '@angular/core/testing';

import { SomeService } from './some.service';

describe('SomeService', () => {
  let service: SomeService;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SomeService);

    spy = spyOn(service, 'ngOnDestroy').and.callThrough();
  });

  afterAll(() => {
    expect(spy).toHaveBeenCalled();
    console.log(service);
  });

  afterEach(() => {
    // fix
    service.ngOnDestroy();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have on destroy', () => {
    expect(service.ngOnDestroy).toBeTruthy();
  });

  it('should fail', () => {
    expect(false).toBeTruthy();
  });
});
