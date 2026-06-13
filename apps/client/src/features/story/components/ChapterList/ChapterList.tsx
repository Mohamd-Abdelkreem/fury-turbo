'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import type { Chapter } from '../../data/storyData';
import styles from './ChapterList.module.css';

interface ChapterListProps {
  title: string;
  alternativeTitles: string;
  description: string;
  genres: string[];
  chapters: Chapter[];
}

export function ChapterList({
  title,
  alternativeTitles,
  description,
  genres,
  chapters,
}: ChapterListProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Find first and last chapters
  const firstChapter = chapters[chapters.length - 1];
  const lastChapter = chapters[0];

  // Filter chapters based on search query
  const filteredChapters = chapters.filter((ch) => {
    const padded = ch.number.padStart(2, '0');
    const query = searchQuery.trim().toLowerCase();
    return ch.number.toLowerCase().includes(query) || padded.includes(query);
  });

  return (
    <div className={styles.container}>
      {/* 1 ── Title Block */}
      <div className={styles.titleBlock}>
        <h1 className={styles.mainTitle}>{title}</h1>
        <p className={styles.altTitles}>{alternativeTitles}</p>
      </div>

      {/* 2 ── Genres List */}
      <div className={styles.genresWrapper}>
        {genres.map((genre) => (
          <a
            key={genre}
            href={`/discover?genre=${genre}`}
            className={styles.genreBadge}
          >
            {genre}
          </a>
        ))}
      </div>

      {/* 3 ── Description Block */}
      <div className={styles.descriptionSection}>
        <h3 className={styles.sectionHeader}>قصة العمل {title}</h3>
        <p className={styles.descriptionText}>{description}</p>
      </div>



      {/* 4 ── Quick Links (First / Latest Chapters) */}
      <div className={styles.quickLinks}>
        {firstChapter && (
          <a href={firstChapter.url === '#' ? `/story/trait-hoarder/chapter/${firstChapter.number}` : firstChapter.url} className={styles.quickLinkItem}>
            <span className={styles.quickLinkLabel}>الفصل الأول</span>
            <span className={styles.quickLinkVal}>
              فصل {firstChapter.number.padStart(2, '0')}
            </span>
          </a>
        )}
        {lastChapter && (
          <a href={lastChapter.url === '#' ? `/story/trait-hoarder/chapter/${lastChapter.number}` : lastChapter.url} className={styles.quickLinkItem}>
            <span className={styles.quickLinkLabel}>الفصل الجديد</span>
            <span className={styles.quickLinkVal}>فصل {lastChapter.number.padStart(2, '0')}</span>
          </a>
        )}
      </div>

      {/* 5 ── Chapters Listing Section */}
      <div className={styles.chaptersSection}>
        <div className={styles.chaptersHeader}>
          <h3>الفصول {title}</h3>
        </div>

        {/* Search Input */}
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="بحث عن الفصول بالأرقام. مثال: 25 أو 178"
            className={styles.searchInput}
          />
        </div>

        {/* Chapters Scrollable Box */}
        <div className={styles.chaptersListWrapper}>
          {filteredChapters.length > 0 ? (
            <ul className={styles.chaptersList}>
              {filteredChapters.map((ch) => (
                <li key={ch.number} className={styles.chapterItem}>
                  <a href={ch.url === '#' ? `/story/trait-hoarder/chapter/${ch.number}` : ch.url} className={styles.chapterLink}>
                    <span className={styles.chapterNum}>فصل {ch.number.padStart(2, '0')}</span>
                    <span className={styles.chapterDate}>{ch.date}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.noChapters}>لم يتم العثور على فصول</div>
          )}
        </div>
      </div>

    </div>
  );
}
