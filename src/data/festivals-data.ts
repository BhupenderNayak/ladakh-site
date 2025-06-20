
import { Calendar, Flag } from "lucide-react";
import React from "react";

export interface Festival {
  id: string;
  name: string;
  dateRange: string;
  location: string;
  description: string;
  blurb: string;
  image: string;
  type: 'Cultural' | 'Adventure' | 'Religious';
  isUpcoming: boolean;
  isMarquee: boolean;
  icon: React.ElementType;
}

export const FESTIVALS_DATA: Festival[] = [
  {
    id: 'hemis-festival',
    name: 'Hemis Festival',
    dateRange: 'June 26-27, 2025',
    location: 'Hemis Monastery',
    description: 'The Hemis Festival is a two-day celebration of the birth of Guru Padmasambhava, the founder of Tibetan Buddhism. Monks perform vibrant masked dances (chaam) in the monastery courtyard, accompanied by traditional music.',
    blurb: 'A vibrant celebration of Tibetan Buddhism with traditional masked dances.',
    image: '/lovable-uploads/2a309577-df82-4e9c-b94f-53e246a3cd4c.png',
    type: 'Religious',
    isUpcoming: true,
    isMarquee: true,
    icon: Calendar,
  },
  {
    id: 'ladakh-festival',
    name: 'Ladakh Festival',
    dateRange: 'September 1-15, 2025',
    location: 'Leh & surrounding villages',
    description: 'A grand spectacle showcasing the rich cultural diversity of Ladakh. The festival features traditional music and dance performances, archery contests, and polo matches, culminating in a grand procession through Leh.',
    blurb: 'A grand showcase of Ladakhi culture, from music and dance to traditional sports.',
    image: '/lovable-uploads/46b9c91c-9150-4ddc-b738-aa7392567467.png',
    type: 'Cultural',
    isUpcoming: true,
    isMarquee: true,
    icon: Flag,
  },
  {
    id: 'losar-festival',
    name: 'Losar Festival',
    dateRange: 'December 21, 2025',
    location: 'Across Ladakh',
    description: 'Losar marks the Ladakhi New Year and is celebrated with immense fervor. Families come together, homes are decorated, and special rituals are performed at monasteries to welcome the new year and ward off evil spirits.',
    blurb: 'The Ladakhi New Year celebration, filled with family, feasts, and ancient rituals.',
    image: '/lovable-uploads/63c5c3b8-f619-429a-bc4e-f1a528a4d49b.png',
    type: 'Cultural',
    isUpcoming: true,
    isMarquee: true,
    icon: Calendar,
  },
  {
    id: 'sindhu-darshan',
    name: 'Sindhu Darshan Festival',
    dateRange: 'June 12-14, 2025',
    location: 'Banks of Indus River, Shey',
    description: 'This festival celebrates the Indus River (Sindhu) as a symbol of communal harmony and unity in India. Artists from across the country perform, showcasing a blend of different cultures.',
    blurb: 'A celebration of the Indus River symbolizing national unity and cultural fusion.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    type: 'Cultural',
    isUpcoming: true,
    isMarquee: false,
    icon: Flag,
  },
    {
    id: 'stok-guru-tsechu',
    name: 'Stok Guru Tsechu',
    dateRange: 'February 18-19, 2026',
    location: 'Stok Monastery',
    description: 'This festival is held one month before the Matho Nagrang festival and features masked dances performed by monks. A unique aspect is the appearance of two oracles, laymen who are prepared and chosen by lamas to be possessed by spirits.',
    blurb: 'Witness unique oracle performances and sacred masked dances at Stok Monastery.',
    image: '/lovable-uploads/1f06ea9a-37a8-4a1c-a081-9801c5a11ca7.png',
    type: 'Religious',
    isUpcoming: false,
    isMarquee: false,
    icon: Calendar,
  },
  {
    id: 'matho-nagrang',
    name: 'Matho Nagrang',
    dateRange: 'March 14-15, 2026',
    location: 'Matho Monastery',
    description: 'This two-day festival is famous for the appearance of two oracles who, after months of meditation in isolation, perform incredible acts like running blindfolded along the monastery\'s high ramparts.',
    blurb: 'A breathtaking festival featuring prophetic oracles and stunning monastery views.',
    image: '/lovable-uploads/c881a127-3224-41ab-b8bb-e307074e8133.png',
    type: 'Religious',
    isUpcoming: false,
    isMarquee: false,
    icon: Calendar,
  },
];
