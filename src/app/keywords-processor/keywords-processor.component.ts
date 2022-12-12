import { Component, OnInit } from '@angular/core';
import { KeywordsService } from '../keywords.service';

import { NCC } from '../ncc';

@Component({
  selector: 'app-keywords-processor',
  templateUrl: './keywords-processor.component.html',
  styleUrls: ['./keywords-processor.component.css'],
})
export class KeywordsProcessorComponent implements OnInit {
  supportedNCCs: NCC[] = [];
  selectedNCC?: NCC;

  currentDate = new Date();

  constructor(private keywordsService: KeywordsService) {}

  ngOnInit() {
    this.getSupportedNCCs();
  }

  onSelect(ncc: NCC): void {
    this.selectedNCC = ncc;
  }

  getSupportedNCCs(): void {
    this.supportedNCCs = this.keywordsService.getSupportedNCCs();
  }
}
