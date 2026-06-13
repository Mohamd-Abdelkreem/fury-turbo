'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import styles from './MangaCard.module.css';

// ── Helpers ──────────────────────────────────────────────────────────────────

const MANGA_AUTHORS = [
  'Ryo Minenami', 'Yukinobu Tatsu', 'Gege Akutami', 'Eiichiro Oda',
  'Tite Kubo', 'Koyoharu Gotouge', 'Chugong', 'Masashi Kishimoto',
  'Hajime Isayama', 'Sui Ishida', 'Tsugumi Ohba', 'Kentarou Miura',
  'Yoshihiro Togashi', 'Akira Toriyama', 'Hiro Mashima', 'Tatsuki Fujimoto',
];

const CHAPTER_TITLES_ENG = [
  'Smile', 'A New Beginning', 'The Decisive Battle', 'Lost Power',
  'Mysterious Agreement', 'Way of the Beast', 'Facing Death', 'Memory Shards',
  'The Last Hope', 'Raging Darkness', 'Cursed Gate', 'Return of the Legend',
  'Willpower', 'The True Traitor',
];

export function getMangaAuthor(id: number): string {
  return MANGA_AUTHORS[id % MANGA_AUTHORS.length] ?? 'Fury Artist';
}

export function getChapterTitleEng(id: number): string {
  return CHAPTER_TITLES_ENG[id % CHAPTER_TITLES_ENG.length] ?? '';
}

export function getMangaViews(id: number, rating: number): string {
  const normalized = rating > 5 ? rating / 2 : rating;
  const val = (normalized * 8.4 + (id % 7) * 4.2 + 12.3).toFixed(1);
  return `${val}K`;
}

export function getChapterBadgeText(chapter: string): string {
  const numMatch = chapter.match(/\d+/);
  if (numMatch) {
    return `#${numMatch[0].padStart(3, '0')}`;
  }
  return `#${chapter}`;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface CardOverlayProps {
  id: number;
  title: string;
  chapter: string;
  rating: number;
  isSmall: boolean;
  hovered: boolean;
}

export function CardOverlay({
  id,
  title,
  chapter,
  rating,
  isSmall,
  hovered,
}: CardOverlayProps) {
  return (
    <div className={cn(styles.overlay, hovered && styles.visible)}>
      {/* Title */}
      <h4
        className={styles.overlayTitle}
        style={{ fontSize: isSmall ? '0.98rem' : '1.08rem' }}
      >
        {title}
      </h4>

      {/* Author */}
      <span
        className={styles.overlayAuthor}
        style={{ fontSize: isSmall ? '0.72rem' : '0.78rem' }}
      >
        {getMangaAuthor(id)}
      </span>

      {/* Chapter Badge */}
      <div className={styles.overlayChapterBadge}>
        {getChapterBadgeText(chapter)}
      </div>

      {/* Chapter Title */}
      <span
        className={styles.overlayChapterTitle}
        style={{ fontSize: isSmall ? '0.78rem' : '0.84rem' }}
      >
        Chapter {chapter.replace(/[^0-9]/g, '') || chapter} :{' '}
        {getChapterTitleEng(id)}
      </span>

      {/* Views */}
      <span
        className={styles.overlayViews}
        style={{ fontSize: isSmall ? '0.78rem' : '0.82rem' }}
      >
        {getMangaViews(id, rating)}
      </span>
    </div>
  );
}
