'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import type { MangaCardData } from '@/types';
import { CardImage } from './CardImage';
import { CardMeta } from './CardMeta';
import styles from './MangaCard.module.css';

interface MangaCardProps extends MangaCardData {
  size?: 'sm' | 'md';
  stretch?: boolean;
}

export function MangaCard({
  id = 0,
  title,
  chapter,
  rating,
  flag,
  image,
  isNew,
  isHot,
  badge,
  size = 'md',
  stretch = false,
}: MangaCardProps) {
  const isSmall = size === 'sm';

  return (
    <div
      dir="rtl"
      className={cn(styles.card, stretch && styles.stretch)}
      style={{
        width: stretch ? '100%' : isSmall ? '150px' : '185px',
      }}
    >
      {/* Cover Image + Badges Container */}
      <div className={styles.imageWrapper}>
        <CardImage
          src={image}
          title={title}
          flag={flag}
          isNew={isNew}
          isHot={isHot}
          badge={badge}
          rating={rating}
        />
      </div>

      {/* Info below card */}
      <CardMeta
        title={title}
        chapter={chapter}
        rating={rating}
        isSmall={isSmall}
      />
    </div>
  );
}
