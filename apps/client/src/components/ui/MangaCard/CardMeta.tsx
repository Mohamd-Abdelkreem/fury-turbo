'use client';

import React from 'react';
import { Star } from 'lucide-react';
import styles from './MangaCard.module.css';

interface CardMetaProps {
  title: string;
  chapter: string;
  rating: number;
  isSmall: boolean;
}

function renderStars(rating: number): React.ReactNode {
  const normalized = rating > 5 ? rating / 2 : rating;
  return (
    <div className={styles.starRow}>
      {[1, 2, 3, 4, 5].map((starIndex) => {
        const isFilled = normalized >= starIndex;
        const isHalf = !isFilled && normalized >= starIndex - 0.5;
        return (
          <Star
            key={starIndex}
            style={{
              width: 10,
              height: 10,
              fill: isFilled
                ? 'var(--accent)'
                : isHalf
                  ? 'url(#halfStar)'
                  : 'transparent',
              color:
                isFilled || isHalf
                  ? 'var(--accent)'
                  : 'rgba(255, 255, 255, 0.15)',
            }}
          />
        );
      })}
    </div>
  );
}

export function CardMeta({ title, chapter, rating, isSmall }: CardMetaProps) {
  const displayRating = rating > 5 ? rating.toFixed(1) : (rating * 2).toFixed(1);

  return (
    <div className={styles.meta}>
      {/* SVG half-star gradient definition */}
      <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <defs>
          <linearGradient id="halfStar" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="50%" stopColor="var(--accent)" />
            <stop offset="50%" stopColor="transparent" stopOpacity={1} />
          </linearGradient>
        </defs>
      </svg>

      {/* Title */}
      <h3
        className={styles.metaTitle}
        style={{
          fontSize: isSmall ? '1.02rem' : '1.18rem',
        }}
        title={title}
      >
        {title}
      </h3>

      {/* Chapter */}
      <span className={styles.metaChapter}>
        {chapter.includes('الفصل') ? chapter : `فصل ${chapter}`}
      </span>

      {/* Rating */}
      <div className={styles.metaRating}>
        {renderStars(rating)}
        <span className={styles.ratingValue}>{displayRating}</span>
      </div>
    </div>
  );
}
