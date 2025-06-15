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
    image: '/lovable-uploads/75527b66-1600-48fb-ba8b-cb9002e5ccd8.png',
  },
  {
    id: 'diskit-monastery',
    name: 'Diskit Monastery',
    location: 'Nubra Valley',
    era: '14th Century',
    description: 'The oldest and largest Buddhist monastery in the Nubra Valley of Ladakh. It belongs to the Gelugpa (Yellow Hat) sect of Tibetan Buddhism.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
  },
  {
    id: 'hemis-monastery',
    name: 'Hemis Monastery',
    location: 'Hemis',
    era: '17th Century',
    description: 'A Tibetan Buddhist monastery of the Drukpa Lineage, re-established in 1672. It is famous for its annual Hemis festival.',
    image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&q=80',
  },
];
