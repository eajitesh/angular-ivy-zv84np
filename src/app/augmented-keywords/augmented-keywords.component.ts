import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { KeywordsWordcloudService } from '../keywords-wordcloud.service';
import { KeywordsService } from '../keywords.service';

import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

import { NCC } from '../ncc';

@Component({
  selector: 'app-augmented-keywords',
  templateUrl: './augmented-keywords.component.html',
  styleUrls: ['./augmented-keywords.component.css'],
})
export class AugmentedKeywordsComponent implements OnInit {
  ncc: NCC | undefined;
  id?: number;
  keyword?: string;
  cloudData?: CloudData[];

  constructor(
    private route: ActivatedRoute,
    private keywordsWordCloudService: KeywordsWordcloudService,
    private keywordsService: KeywordsService,
    private location: Location
  ) {}

  ngOnInit() {
    this.displayAugmentedKeywordsCloud();
  }

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 800,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 300,
    overflow: false,
  };

  displayAugmentedKeywordsCloud(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.keyword = String(this.route.snapshot.paramMap.get('keyword'));
    this.cloudData = this.keywordsWordCloudService.getAugWordCloudByNCCUidName(
      this.id,
      this.keyword
    );
    this.ncc = this.keywordsService.getNCCbyUid(this.id);
  }

  goBack(): void {
    this.location.back();
  }
}
