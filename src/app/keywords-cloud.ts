import { SupportedNCCs } from './supported-nccs';

export class KeywordsWeight {
  weight: number;
  text: string;
  augment: string;
  link: string;
}

export class KeywordsCloud {
  id: number;
  keywords: KeywordsWeight[];
}

export const KeywordsCloudArr: KeywordsCloud[] = [
  {
    id: SupportedNCCs[0]['uid'],
    keywords: [
      // { text: 'market research', weight: 6876 },
      { text: 'physicians', weight: 1031, augment: '', link: 'aug-keywords' },
      { text: 'patient', weight: 624, augment: '', link: '' },
      { text: 'tracking', weight: 550, augment: '', link: '' },
      { text: 'usage', weight: 539, augment: '', link: '' },
      { text: 'quantitative', weight: 255, augment: '', link: '' },
      { text: 'patient journey', weight: 225, augment: '', link: '' },
      { text: 'qualitative', weight: 196, augment: '', link: '' },
      { text: 'message recall', weight: 120, augment: '', link: '' },
      { text: 'focus group', weight: 120, augment: '', link: '' },
      { text: 'online', weight: 171, augment: '', link: '' },
      { text: 'pricing research', weight: 96, augment: '', link: '' },
    ],
  },
  {
    id: SupportedNCCs[1]['uid'],
    keywords: [
      { text: 'secondary market research', weight: 500, augment: '', link: '' },
      { text: 'SMR', weight: 225, augment: '', link: '' },
    ],
  },
  {
    id: SupportedNCCs[2]['uid'],
    keywords: [
      { text: 'literature review', weight: 4020, augment: '', link: '' },
      { text: 'economic model', weight: 1925, augment: '', link: '' },
      { text: 'abstract', weight: 1278, augment: '', link: '' },
      { text: 'economic modelling', weight: 130, augment: '', link: '' },
      { text: 'poster', weight: 231, augment: '', link: '' },
      { text: 'manuscript', weight: 156, augment: '', link: '' },
    ],
  },
  {
    id: SupportedNCCs[3]['uid'],
    keywords: [
      { text: 'value proposition', weight: 1320, augment: '', link: '' },
      { text: 'value perception', weight: 825, augment: '', link: '' },
      { text: 'value percept', weight: 165, augment: '', link: '' },
      { text: 'advisory board', weight: 156, augment: '', link: '' },
      { text: 'funding flow', weight: 84, augment: '', link: '' },
      { text: 'evidence requirement', weight: 18, augment: '', link: '' },
      { text: 'analog', weight: 12, augment: '', link: '' },
      { text: 'payer mix', weight: 9, augment: '', link: '' },
      { text: 'price trade-off', weight: 8, augment: '', link: '' },
    ],
  },
];
