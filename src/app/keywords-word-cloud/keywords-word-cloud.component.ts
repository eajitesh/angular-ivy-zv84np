import { Component, OnInit, Input } from '@angular/core';

import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

import { NCC } from '../ncc';

@Component({
  selector: 'app-keywords-word-cloud',
  templateUrl: './keywords-word-cloud.component.html',
  styleUrls: ['./keywords-word-cloud.component.css'],
})
export class KeywordsWordCloudComponent implements OnInit {
  constructor() {}

  @Input() ncc?: NCC;

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 1000,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 400,
    overflow: false,
  };

  data: CloudData[] = [
    {
      text: 'Weight-8-link-color',
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

  ngOnInit() {}
}
