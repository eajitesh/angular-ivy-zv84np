import { Injectable } from '@angular/core';

import { NCC } from './ncc';
import { SupportedNCCs } from './supported-nccs';

@Injectable({ providedIn: 'root' })
export class KeywordsService {
  constructor() {}

  getSupportedNCCs(): NCC[] {
    return SupportedNCCs;
  }

  getNCCbyUid(uid: number): NCC {
    const len = SupportedNCCs.length;
    for (let i = 0; i < len; i++) {
      const ncc = SupportedNCCs[i];
      if (ncc.uid == uid) {
        return ncc;
      }
    }
  }
}
