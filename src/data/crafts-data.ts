
export interface Craft {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Artisan {
  id: string;
  name: string;
  craft: string;
  workshopLocation: string;
  image: string;
  mapsLink: string;
}

export const CRAFTS_DATA: Craft[] = [
  { id: 'pashmina', name: 'Pashmina Shawls', image: 'https://images.unsplash.com/photo-1543887893-2558f9ce3560?w=800&q=80', description: 'Woven from the finest cashmere wool, a symbol of luxury and timeless elegance.' },
  { id: 'thangka', name: 'Thangka Paintings', image: 'https://images.unsplash.com/photo-1615459535308-c6ced9083a21?w=800&q=80', description: 'Intricate Buddhist scroll paintings depicting deities and mandalas.' },
  { id: 'wood-carving', name: 'Wood Carving', image: 'https://images.unsplash.com/photo-1601121141499-17ae80afc53f?w=800&q=80', description: 'Elaborate carvings on furniture and architectural elements, showcasing local motifs.' },
];

export const ARTISANS_DATA: Artisan[] = [
  { id: '1', name: 'Tsering Dolma', craft: 'Pashmina Weaver', workshopLocation: 'Leh', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', mapsLink: 'https://www.google.com/maps' },
  { id: '2', name: 'Lobsang Thuktan', craft: 'Thangka Painter', workshopLocation: 'Thiksey', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', mapsLink: 'https://www.google.com/maps' },
  { id: '3', name: 'Sonam Wangyal', craft: 'Wood Carver', workshopLocation: 'Nubra', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80', mapsLink: 'https://www.google.com/maps' },
];
