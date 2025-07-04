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
    image: '/lovable-uploads/857f410d-f63d-4b99-a35a-9f0979af7f23.png',
  },
  {
    id: 'thiksey-monastery',
    name: 'Thiksey Monastery',
    location: 'Thiksey',
    era: '15th Century',
    description: 'A gompa affiliated with the Gelug sect of Tibetan Buddhism. It is noted for its resemblance to the Potala Palace in Lhasa, Tibet.',
    image: '/lovable-uploads/4b0dfb69-d1d8-41c3-834f-4dfb46035318.png',
  },
  {
    id: 'diskit-monastery',
    name: 'Diskit Monastery',
    location: 'Nubra Valley',
    era: '14th Century',
    description: 'The oldest and largest Buddhist monastery in the Nubra Valley of Ladakh. It belongs to the Gelugpa (Yellow Hat) sect of Tibetan Buddhism.',
    image: '/lovable-uploads/c706b8ab-5911-44e2-930e-9bf2d42c4b0e.png',
  },
  {
    id: 'hemis-monastery',
    name: 'Hemis Monastery',
    location: 'Hemis',
    era: '17th Century',
    description: 'A Tibetan Buddhist monastery of the Drukpa Lineage, re-established in 1672. It is famous for its annual Hemis festival.',
    image: '/lovable-uploads/a636b72a-10cf-41a2-b315-ba3fbd41a04b.png',
  },
];
