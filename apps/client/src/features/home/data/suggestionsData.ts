import type { MangaCardData } from '@/types';

export type SuggestionCategory = 'أكشن' | 'ألعاب' | 'سحر';

export const SUGGESTION_CATEGORIES: SuggestionCategory[] = ['أكشن', 'ألعاب', 'سحر'];

export const SUGGESTIONS_DATA: Record<SuggestionCategory, MangaCardData[]> = {
  أكشن: [
    {
      id: 1,
      title: 'Eternal Warrior',
      chapter: 'الفصل 88',
      rating: 4.8,
      flag: '🇯🇵',
      isHot: true,
      image:
        'https://images.unsplash.com/photo-1658233427270-ba4d9d03b53c?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 2,
      title: 'Sacred Sword',
      chapter: 'الفصل 44',
      rating: 4.6,
      flag: '🇯🇵',
      image:
        'https://images.unsplash.com/photo-1644253599072-9ef3f70dc93c?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 3,
      title: 'Wrath of the Serpent',
      chapter: 'الفصل 201',
      rating: 4.7,
      flag: '🇰🇷',
      isNew: true,
      image:
        'https://images.unsplash.com/photo-1615038403612-c0db30ce8f91?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 4,
      title: 'Desert Wind',
      chapter: 'الفصل 33',
      rating: 4.4,
      flag: '🇯🇵',
      image:
        'https://images.unsplash.com/photo-1705831156575-a5294d295a31?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 5,
      title: "Prince's Revenge",
      chapter: 'الفصل 77',
      rating: 4.5,
      flag: '🇰🇷',
      image:
        'https://images.unsplash.com/photo-1763732397864-5b860bb298b0?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 6,
      title: 'Dawn of War',
      chapter: 'الفصل 156',
      rating: 4.9,
      flag: '🇯🇵',
      isHot: true,
      image:
        'https://images.unsplash.com/photo-1734517709196-48873cca9599?w=280&h=400&fit=crop&auto=format',
    },
  ],
  ألعاب: [
    {
      id: 1,
      title: 'Level 1 Player',
      chapter: 'الفصل 220',
      rating: 4.9,
      flag: '🇰🇷',
      isHot: true,
      image:
        'https://images.unsplash.com/photo-1644253599072-9ef3f70dc93c?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 2,
      title: 'Simulation World',
      chapter: 'الفصل 55',
      rating: 4.6,
      flag: '🇰🇷',
      isNew: true,
      image:
        'https://images.unsplash.com/photo-1734517709196-48873cca9599?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 3,
      title: 'The Final Project',
      chapter: 'الفصل 99',
      rating: 4.7,
      flag: '🇯🇵',
      image:
        'https://images.unsplash.com/photo-1615038403612-c0db30ce8f91?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 4,
      title: 'Command Center',
      chapter: 'الفصل 12',
      rating: 4.3,
      flag: '🇰🇷',
      isNew: true,
      image:
        'https://images.unsplash.com/photo-1705831156575-a5294d295a31?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 5,
      title: 'Dungeon Hero',
      chapter: 'الفصل 188',
      rating: 4.8,
      flag: '🇯🇵',
      isHot: true,
      image:
        'https://images.unsplash.com/photo-1658233427270-ba4d9d03b53c?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 6,
      title: 'Digital War',
      chapter: 'الفصل 41',
      rating: 4.5,
      flag: '🇰🇷',
      image:
        'https://images.unsplash.com/photo-1763732397864-5b860bb298b0?w=280&h=400&fit=crop&auto=format',
    },
  ],
  سحر: [
    {
      id: 1,
      title: 'Magic Gate',
      chapter: 'الفصل 66',
      rating: 4.7,
      flag: '🇯🇵',
      image:
        'https://images.unsplash.com/photo-1448125719522-f5ea48ada070?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 2,
      title: 'The Cursed Sorcerer',
      chapter: 'الفصل 140',
      rating: 4.8,
      flag: '🇯🇵',
      isHot: true,
      image:
        'https://images.unsplash.com/photo-1644253599072-9ef3f70dc93c?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 3,
      title: 'Magic Academy',
      chapter: 'الفصل 23',
      rating: 4.4,
      flag: '🇰🇷',
      isNew: true,
      image:
        'https://images.unsplash.com/photo-1705831156575-a5294d295a31?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 4,
      title: 'The Enchanted Throne',
      chapter: 'الفصل 95',
      rating: 4.6,
      flag: '🇯🇵',
      image:
        'https://images.unsplash.com/photo-1615038403612-c0db30ce8f91?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 5,
      title: 'Book of Spirits',
      chapter: 'الفصل 57',
      rating: 4.5,
      flag: '🇰🇷',
      image:
        'https://images.unsplash.com/photo-1734517709196-48873cca9599?w=280&h=400&fit=crop&auto=format',
    },
    {
      id: 6,
      title: 'Time Wizard',
      chapter: 'الفصل 179',
      rating: 4.9,
      flag: '🇯🇵',
      isHot: true,
      image:
        'https://images.unsplash.com/photo-1658233427270-ba4d9d03b53c?w=280&h=400&fit=crop&auto=format',
    },
  ],
};
