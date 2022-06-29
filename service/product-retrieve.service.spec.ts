/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductRetrieveService } from './product-retrieve.service';

describe('Service: ProductRetrieve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductRetrieveService]
    });
  });

  it('should ...', inject([ProductRetrieveService], (service: ProductRetrieveService) => {
    expect(service).toBeTruthy();
  }));
});
