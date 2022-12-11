import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CloudData } from 'angular-tag-cloud-module';

import { NCC } from './ncc';

@Injectable({ providedIn: 'root' })
export class KeywordsWordcloudService {
  constructor() {}

  // cloudData?: CloudData[];

  // getWordCloud(ncc: NCC): Observable<CloudData[]> {
  getWordCloud(ncc: NCC): CloudData[] {
    console.log(ncc.name);
    const cloudData: CloudData[] = [
      {
        text: 'Weight-9-link-color',
        weight: 9,
      },
      {
        text: 'Weight-10-link',
        weight: 10,
      },
      {
        text: 'Weight-8-link',
        weight: 8,
      },
      {
        text: 'Weight-11-link',
        weight: 11,
      },
      // ...
    ];
    // const cdata = of(cloudData);
    // return cdata;
    return cloudData;
  }
}
