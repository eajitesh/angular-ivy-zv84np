import { Component, OnInit, Input } from '@angular/core';

import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

import { NCC } from '../ncc';

import { KeywordsWordcloudService } from '../keywords-wordcloud.service';

@Component({
  selector: 'app-keywords-word-cloud',
  templateUrl: './keywords-word-cloud.component.html',
  styleUrls: ['./keywords-word-cloud.component.css'],
})
export class KeywordsWordCloudComponent implements OnInit {
  // @Input() ncc?: NCC;
  @Input()
  get ncc(): NCC {
    return this._ncc;
  }
  set ncc(ncc: NCC) {
    this._ncc = ncc;
  }
  private _ncc?: NCC;

  cloudData?: CloudData[];

  // set ncc(ncc: NCC) {
  //   this.cloudData = this.keywordsWordCloudService.getWordCloud(this.ncc);
  // }

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 1000,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 400,
    overflow: false,
  };

  constructor(private keywordsWordCloudService: KeywordsWordcloudService) {}

  ngOnInit() {
    // this.cloudData = this.keywordsWordCloudService.getWordCloud(this.ncc);
    // this.keywordsWordCloudService
    //   .getWordCloud(this.ncc)
    //   .subscribe((cdata) => (this.cloudData = cdata));
    this.keywordsWordCloudService.getWordCloud(this.ncc);
  }
}
