import { Component, OnInit } from '@angular/core';

import { NCC } from '../ncc';
import { SupportedNCCs } from '../supported-nccs';

@Component({
  selector: 'app-keywords-processor',
  templateUrl: './keywords-processor.component.html',
  styleUrls: ['./keywords-processor.component.css'],
})
export class KeywordsProcessorComponent implements OnInit {
  supportedNCCs = SupportedNCCs;
  selectedNCC?: NCC;

  constructor() {}

  ngOnInit() {}

  onSelect(ncc: NCC): void {
    this.selectedNCC = ncc;
  }
}
