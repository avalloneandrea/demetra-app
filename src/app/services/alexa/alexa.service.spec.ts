import { TestBed } from '@angular/core/testing';

import { AlexaService } from './alexa.service';

describe('AlexaService', () => {
  let service: AlexaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlexaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
