
export interface Monument {
  id: string;
  name: string;
  location: string;
  era: string;
  description: string;
  image: string;
}

export const MONUMENTS_DATA: Monument[] = [
  {
    id: 'leh-palace',
    name: 'Leh Palace',
    location: 'Leh',
    era: '17th Century',
    description: 'A former royal palace overlooking the Ladakhi Himalayan town of Leh. A stunning example of medieval Tibetan architecture.',
    image: 'https://images.unsplash.com/photo-1588269837016-858b38745a5a?w=800&q=80',
  },
  {
    id: 'thiksey-monastery',
    name: 'Thiksey Monastery',
    location: 'Thiksey',
    era: '15th Century',
    description: 'A gompa affiliated with the Gelug sect of Tibetan Buddhism. It is noted for its resemblance to the Potala Palace in Lhasa, Tibet.',
    image: 'https://images.unsplash.com/photo-1599623820128-06a57e3e7a3e?w=800&q=80',
  },
  {
    id: 'diskit-monastery',
    name: 'Diskit Monastery',
    location: 'Nubra Valley',
    era: '14th Century',
    description: 'The oldest and largest Buddhist monastery in the Nubra Valley of Ladakh. It belongs to the Gelugpa (Yellow Hat) sect of Tibetan Buddhism.',
    image: 'https://images.unsplash.com/photo-1600803468008-5d8f9b883c74?w=800&q=80',
  },
  {
    id: 'hemis-monastery',
    name: 'Hemis Monastery',
    location: 'Hemis',
    era: '17th Century',
    description: 'A Tibetan Buddhist monastery of the Drukpa Lineage, re-established in 1672. It is famous for its annual Hemis festival.',
    image: 'https://images.unsplash.com/photo-1621294794212-a515c32b5d4e?w=800&q=80',
  },
];
