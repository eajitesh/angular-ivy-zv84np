import { Injectable } from '@angular/core';

import { NCC } from './ncc';
import { SupportedNCCs } from './supported-nccs';

@Injectable({ providedIn: 'root' })
export class KeywordsService {
  constructor() {}

  getSupportedNCCs(): NCC[] {
    return SupportedNCCs;
  }
}
