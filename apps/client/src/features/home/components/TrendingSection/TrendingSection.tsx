'use client';

import React from 'react';
import { TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { MangaCard } from '@/components/ui/MangaCard/MangaCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/Carousel/Carousel';
import { TRENDING_DATA } from '@/features/home/data/trendingData';
import styles from './TrendingSection.module.css';

export function TrendingSection() {
  return (
    <section dir="rtl" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div
              className={styles.accentBar}
              style={{ background: '#ffffff' }}
            />
            <TrendingUp style={{ width: 18, height: 18, color: '#ffffff' }} />
            <h2
              style={{
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 800,
                fontSize: '1.15rem',
                color: '#ffffff',
              }}
            >
              الأعمال الرائجة
            </h2>
            <span
              className={styles.headerBadge}
              style={{
                background: 'rgba(255, 71, 71, 0.12)',
                border: '1px solid rgba(255, 71, 71, 0.4)',
                color: 'var(--primary)',
                fontFamily: "'Cairo', sans-serif",
                fontWeight: 700,
              }}
            >
              الأكثر شيوعاً
            </span>
          </div>
          <div>
            <a href="#" className={styles.viewAll}>
              عرض الكل
              <ChevronLeft style={{ width: 14, height: 14 }} />
            </a>
          </div>
        </div>

        {/* Carousel */}
        <div className={styles.carouselWrapper}>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              direction: 'rtl',
              duration: 60,
            }}
          >
            <CarouselContent style={{ marginLeft: '-1rem' }}>
              {TRENDING_DATA.map((manga) => (
                <CarouselItem
                  key={manga.id}
                  className={styles.carouselItem}
                  style={{ paddingLeft: '1rem' }}
                >
                  <MangaCard {...manga} stretch />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className={styles.arrowsWrapper}>
              <CarouselPrevious
                className={`${styles.arrowBtn} ${styles.arrowLeft}`}
              />
              <CarouselNext
                className={`${styles.arrowBtn} ${styles.arrowRight}`}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
