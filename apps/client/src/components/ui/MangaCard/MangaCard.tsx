'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import type { MangaCardData } from '@/types';
import { CardImage } from './CardImage';
import { CardOverlay } from './CardOverlay';
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
  const [hovered, setHovered] = useState(false);
  const isSmall = size === 'sm';

  return (
    <div
      dir="rtl"
      className={cn(styles.card, stretch && styles.stretch)}
      style={{
        width: stretch ? '100%' : isSmall ? '150px' : '185px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cover Image + Badges Container */}
      <div
        className={styles.imageWrapper}
        style={{
          boxShadow: hovered
            ? '0 12px 24px rgba(0, 0, 0, 0.5)'
            : '0 4px 12px rgba(0, 0, 0, 0.3)',
        }}
      >
        <CardImage
          src={image}
          title={title}
          flag={flag}
          isNew={isNew}
          isHot={isHot}
          badge={badge}
          rating={rating}
        />
        <CardOverlay
          id={id}
          title={title}
          chapter={chapter}
          rating={rating}
          isSmall={isSmall}
          hovered={hovered}
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
