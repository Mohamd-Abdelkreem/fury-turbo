export interface Chapter {
  number: string;
  date: string;
  url: string;
}

export interface SimilarWork {
  id: number;
  title: string;
  chapter: string;
  rating: number;
  image: string;
  flag: string;
  type: string;
}

export interface StoryDetailData {
  id: string;
  title: string;
  alternativeTitles: string;
  description: string;
  author: string;
  artist: string;
  publisher: string;
  translator: string;
  genres: string[];
  status: string;
  type: string;
  views: string;
  rating: number;
  ratingCount: number;
  bookmarkedBy: number;
  publishedDate: string;
  lastUpdated: string;
  bannerImage: string;
  coverImage: string;
  chapters: Chapter[];
  similarWorks: SimilarWork[];
}

export const STORY_DETAIL: StoryDetailData = {
  id: 'trait-hoarder',
  title: 'Trait Hoarder',
  alternativeTitles: '특성 쌓는 김전사 , سمة المكتنز , المحارب كيم يبني الخصائص',
  description: '[من الاستوديو الذي قدم لك <عودة طائفة جبل هوا>!] كيم جونسو، مصنف مجاني في لعبة الهاتف المحمول “سيول الغامضة”، وهو الشخصية التعليمية للعبة، المحارب كيم! عليه أن يعيش في عالم لا يرحم كشخصية أساسية. كل ما عليه أن يثق به هو معرفته باللعبة كمصنف وقدرة المحارب كيم على تبديل السمات إلى أجل غير مسمى!',
  author: 'LICO',
  artist: 'LICO',
  publisher: 'Naver Webtoon (Naver)',
  translator: 'Fury',
  genres: [
    'أكشن',
    'ألعاب',
    'حياة مدرسية',
    'خيال',
    'سحر',
    'شريحة من الحياة',
    'شونين',
    'عوالم',
    'غموض',
    'فنتازيا',
    'فنون قتالية',
    'قوى خارقة',
    'مغامرات',
    'نظام',
    'وحوش'
  ],
  status: 'Ongoing',
  type: 'Manhwa',
  views: '223.3K',
  rating: 10,
  ratingCount: 10,
  bookmarkedBy: 285,
  publishedDate: 'سبتمبر 21, 2024',
  lastUpdated: 'أبريل 12, 2026',
  bannerImage: 'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?w=1200&h=400&fit=crop',
  coverImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&h=420&fit=crop',
  chapters: [
    { number: '43', date: 'أبريل 12, 2026', url: '#' },
    { number: '42', date: 'يناير 7, 2026', url: '#' },
    { number: '41', date: 'يناير 7, 2026', url: '#' },
    { number: '40', date: 'نوفمبر 2, 2025', url: '#' },
    { number: '39', date: 'سبتمبر 7, 2025', url: '#' },
    { number: '38', date: 'مايو 18, 2025', url: '#' },
    { number: '37', date: 'مايو 12, 2025', url: '#' },
    { number: '36', date: 'مايو 3, 2025', url: '#' },
    { number: '35', date: 'أبريل 25, 2025', url: '#' },
    { number: '34', date: 'أبريل 25, 2025', url: '#' },
    { number: '33', date: 'أبريل 12, 2025', url: '#' },
    { number: '32', date: 'أبريل 7, 2025', url: '#' },
    { number: '31', date: 'مارس 24, 2025', url: '#' },
    { number: '30', date: 'مارس 19, 2025', url: '#' },
    { number: '29', date: 'مارس 19, 2025', url: '#' },
    { number: '28', date: 'مارس 14, 2025', url: '#' },
    { number: '27', date: 'مارس 14, 2025', url: '#' },
    { number: '26', date: 'فبراير 13, 2025', url: '#' },
    { number: '25', date: 'فبراير 9, 2025', url: '#' },
    { number: '24', date: 'فبراير 8, 2025', url: '#' },
    { number: '23', date: 'يناير 24, 2025', url: '#' },
    { number: '22', date: 'يناير 19, 2025', url: '#' },
    { number: '21', date: 'يناير 14, 2025', url: '#' },
    { number: '20', date: 'يناير 12, 2025', url: '#' },
    { number: '19', date: 'يناير 5, 2025', url: '#' },
    { number: '18', date: 'ديسمبر 23, 2024', url: '#' },
    { number: '17', date: 'ديسمبر 19, 2024', url: '#' },
    { number: '16', date: 'ديسمبر 10, 2024', url: '#' },
    { number: '15', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '14', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '13', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '12', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '11', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '10', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '9', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '8', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '7', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '6', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '5', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '4', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '3', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '02', date: 'نوفمبر 30, 2024', url: '#' },
    { number: '01', date: 'أكتوبر 26, 2024', url: '#' }
  ],
  similarWorks: [
    {
      id: 101,
      title: 'Revenge of the Iron-Blooded Sword Hound',
      chapter: '166',
      rating: 9,
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=300&h=420&fit=crop&auto=format',
      flag: '🇰🇷',
      type: 'Manhwa'
    },
    {
      id: 102,
      title: 'I Became the Successor of the Martial King',
      chapter: '12',
      rating: 10,
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&h=420&fit=crop&auto=format',
      flag: '🇰🇷',
      type: 'Manhwa'
    },
    {
      id: 103,
      title: 'cosmic heavenly demon 3077',
      chapter: '33',
      rating: 10,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=420&fit=crop&auto=format',
      flag: '🇰🇷',
      type: 'Manhwa'
    },
    {
      id: 104,
      title: 'Standard of Reincarnation',
      chapter: '140',
      rating: 9,
      image: 'https://images.unsplash.com/photo-1614583225146-5177e6fbbe7a?w=300&h=420&fit=crop&auto=format',
      flag: '🇰🇷',
      type: 'Manhwa'
    },
    {
      id: 105,
      title: 'Mirror Prepayment',
      chapter: '7',
      rating: 9,
      image: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=300&h=420&fit=crop&auto=format',
      flag: '🇰🇷',
      type: 'Manhwa'
    },
    {
      id: 106,
      title: 'Sword dance online',
      chapter: '55',
      rating: 9,
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=420&fit=crop&auto=format',
      flag: '🇨🇳',
      type: 'Manhua'
    },
    {
      id: 107,
      title: 'The Lord of the Wheel of Destiny',
      chapter: '14',
      rating: 8.5,
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&h=420&fit=crop&auto=format',
      flag: '🇨🇳',
      type: 'Manhua'
    }
  ]
};
