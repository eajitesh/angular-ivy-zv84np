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
    // const cloudData: CloudData[] = [
    //   {
    //     text: 'Weight-9-link-color',
    //     weight: 9,
    //   },
    //   {
    //     text: 'Weight-10-link',
    //     weight: 10,
    //   },
    //   {
    //     text: 'Weight-8-link',
    //     weight: 8,
    //   },
    //   {
    //     text: 'Weight-11-link',
    //     weight: 11,
    //   },
    //   // ...
    // ];
    // return cloudData;
  }
}
