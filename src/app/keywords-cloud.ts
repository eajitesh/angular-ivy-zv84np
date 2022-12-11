export class KeywordsWeight {
  weight: number;
  text: string;
}

export class KeywordsCloud {
  id: number;
  keywords: KeywordsWeight[];
}

export const KeywordsCloudArr: KeywordsCloud[] = [
  {
    id: 3545040,
    keywords: [
      { text: 'market research', weight: 6876 },
      { text: 'patient', weight: 624 },
      { text: 'quantitative', weight: 255 },
      { text: 'patient journey', weight: 225 },
      { text: 'qualitative', weight: 196 },
      { text: 'message recall', weight: 120 },
      { text: 'focus group', weight: 120 },
      { text: 'online', weight: 171 },
      { text: 'track', weight: 160 },
    ],
  },
  {
    id: 3545060,
    keywords: [
      { text: 'literature review', weight: 4020 },
      { text: 'economic model', weight: 1925 },
      { text: 'abstract', weight: 1278 },
      { text: 'economic modelling: ', weight: 130 },
      { text: 'poster', weight: 231 },
      { text: 'manuscript', weight: 156 },
    ],
  },
  {
    id: 3545080,
    keywords: [
      { text: 'value proposition', weight: 1320 },
      { text: 'value perception', weight: 825 },
      { text: 'value percept: ', weight: 165 },
      { text: 'advisory board', weight: 156 },
      { text: 'funding flow', weight: 84 },
      { text: 'evidence requirement', weight: 18 },
      { text: 'analog', weight: 12 },
      { text: 'payer mix', weight: 9 },
      { text: 'price trade-off', weight: 8 },
    ],
  },
];
