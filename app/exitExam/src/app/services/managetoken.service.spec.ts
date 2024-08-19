import { TestBed } from '@angular/core/testing';

import { ManagetokenService } from './managetoken.service';

describe('ManagetokenService', () => {
  let service: ManagetokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagetokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
