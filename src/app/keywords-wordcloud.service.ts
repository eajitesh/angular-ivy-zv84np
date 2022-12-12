import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CloudData } from 'angular-tag-cloud-module';

import { NCC } from './ncc';
import { KeywordsCloud, KeywordsCloudArr } from './keywords-cloud';

@Injectable({ providedIn: 'root' })
export class KeywordsWordcloudService {
  constructor() {}

  getWordCloud(ncc: NCC): CloudData[] {
    console.log(ncc.id + ' -- ' + ncc.name);
    const klen = KeywordsCloudArr.length;

    for (let i = 0; i < klen; i++) {
      const kc = KeywordsCloudArr[i];
      if (kc.id == ncc.id) {
        console.log('selected ncc: ' + kc.id + ' --- returning');
        const cloudData: CloudData[] = kc.keywords;
        return cloudData;
      }
    }
  }
}
