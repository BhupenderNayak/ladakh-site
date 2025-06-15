
export interface Recipe {
  id: string;
  name: string;
  image: string;
  snippet: string;
}

export const RECIPES_DATA: Recipe[] = [
  { id: 'thukpa', name: 'Thukpa', image: 'https://images.unsplash.com/photo-1606728035253-0de5c721c238?w=800&q=80', snippet: 'A hearty noodle soup with vegetables or meat, perfect for the cold climate.' },
  { id: 'skyu', name: 'Skyu', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80', snippet: 'A traditional pasta-like dish with root vegetables, slow-cooked to perfection.' },
  { id: 'chhang', name: 'Chhang', image: 'https://images.unsplash.com/photo-1513558161927-5d6448268153?w=800&q=80', snippet: 'A local barley beer, a staple beverage enjoyed during festivities and daily life.' },
];
