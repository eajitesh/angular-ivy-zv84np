import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CloudData } from 'angular-tag-cloud-module';

import { NCC } from './ncc';
import { KeywordsCloud, KeywordsCloudArr } from './keywords-cloud';

@Injectable({ providedIn: 'root' })
export class KeywordsWordcloudService {
  constructor() {}

  getWordCloud(ncc: NCC): CloudData[] {
    const klen = KeywordsCloudArr.length;

    for (let i = 0; i < klen; i++) {
      const kc = KeywordsCloudArr[i];
      if (kc.id == ncc.uid) {
        console.log('selected ncc: ' + kc.id + ' --- returning');
        const cloudData: CloudData[] = kc.keywords;
        return cloudData;
      }
    }
  }

  getWordCloudByNCCUid(uid: number): CloudData[] {
    const klen = KeywordsCloudArr.length;
    for (let i = 0; i < klen; i++) {
      const kc = KeywordsCloudArr[i];
      if (kc.id == uid) {
        const cloudData: CloudData[] = kc.keywords;
        return cloudData;
      }
    }
  }

  getAugWordCloudByNCCUidName(uid: number, text: string): CloudData[] {
    const klen = KeywordsCloudArr.length;
    for (let i = 0; i < klen; i++) {
      const kc = KeywordsCloudArr[i];
      if (kc.id == uid) {
        const klen2 = kc.keywords.length;
        for (let j = 0; j < klen2; j++) {
          const kccloud = kc.keywords[j];
          console.log(kccloud.text);
          if (text.indexOf(kccloud.text) !== -1) {
            const cloudData: CloudData[] = kccloud.augment;
            return cloudData;
          }
        }
      }
    }
  }
}
