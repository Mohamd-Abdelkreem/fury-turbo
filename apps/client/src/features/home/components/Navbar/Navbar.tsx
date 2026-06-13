'use client';

import React, { useState } from 'react';
import { Search, User, Bell, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/features/home/data/heroData';
import styles from './Navbar.module.css';

// ── NavLogo ────────────────────────────────────────────────────────────────
export function NavLogo() {
  return (
    <a href="#" className={styles.logoLink}>
      <div
        dir="ltr"
        className={styles.logoText}
        style={{ fontFamily: "'Cairo Play', 'Cairo', sans-serif" }}
      >
        <span
          style={{
            fontSize: '26px',
            fontWeight: 900,
            color: 'var(--primary)',
            letterSpacing: '-1px',
            textShadow: '0 0 20px rgba(255,71,71,0.5)',
            lineHeight: 1,
          }}
        >
          F
        </span>
        <span
          style={{
            fontSize: '26px',
            fontWeight: 900,
            color: '#ffffff',
            letterSpacing: '-1px',
            lineHeight: 1,
          }}
        >
          URY
        </span>
      </div>
    </a>
  );
}

// ── NavLinks ───────────────────────────────────────────────────────────────
export function NavLinks() {
  return (
    <nav className={styles.navLinks}>
      {NAV_LINKS.map((link, i) => {
        const isActive = i === 0;
        return (
          <a
            key={link.label}
            href={link.href}
            className={styles.navLink}
            style={{
              fontFamily: "'Cairo', sans-serif",
              fontWeight: isActive ? 700 : 600,
              color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)',
              background: isActive ? 'rgba(255, 71, 71, 0.12)' : 'transparent',
              border: isActive
                ? '1px solid #FF4747'
                : '1px solid transparent',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.color = '#ffffff';
              el.style.background = isActive
                ? 'rgba(255, 71, 71, 0.18)'
                : 'rgba(255, 71, 71, 0.12)';
              el.style.borderColor = '#FF4747';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.color = isActive
                ? '#ffffff'
                : 'rgba(255, 255, 255, 0.6)';
              el.style.background = isActive
                ? 'rgba(255, 71, 71, 0.12)'
                : 'transparent';
              el.style.borderColor = isActive ? '#FF4747' : 'transparent';
            }}
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
}

// ── NavActions ─────────────────────────────────────────────────────────────
interface NavActionsProps {
  query: string;
  onQueryChange: (value: string) => void;
  mobileOpen: boolean;
  onMobileToggle: () => void;
}

export function NavActions({
  query,
  onQueryChange,
  mobileOpen,
  onMobileToggle,
}: NavActionsProps) {
  return (
    <div className={styles.actions}>
      {/* Search bar */}
      <div className={styles.searchWrapper}>
        <Search
          className={styles.searchIcon}
          style={{
            color: 'rgba(255,255,255,0.4)',
            width: 14,
            height: 14,
          }}
        />
        <input
          dir="rtl"
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="البحث عن مانجا..."
          className={styles.searchInput}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#ffffff',
            fontFamily: "'Cairo', sans-serif",
            fontWeight: 500,
          }}
          onFocus={(e) => {
            e.target.style.width = '220px';
            e.target.style.background = 'rgba(0, 0, 0, 0.3)';
            e.target.style.borderColor = 'var(--primary)';
            e.target.style.boxShadow = '0 0 12px rgba(255, 71, 71, 0.15)';
          }}
          onBlur={(e) => {
            e.target.style.width = '180px';
            e.target.style.background = 'rgba(255, 255, 255, 0.03)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
            e.target.style.boxShadow = 'none';
          }}
        />
        <span className={styles.shortcut}>Ctrl K</span>
      </div>

      {/* Bell */}
      <button
        className={styles.iconBtn}
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.background = 'rgba(255, 71, 71, 0.05)';
          el.style.borderColor = 'rgba(255, 71, 71, 0.3)';
          const icon = el.querySelector('svg') as SVGElement;
          if (icon) {
            icon.style.color = '#ffffff';
            icon.style.transform = 'scale(1.05)';
          }
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.background = 'rgba(255, 255, 255, 0.03)';
          el.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          const icon = el.querySelector('svg') as SVGElement;
          if (icon) {
            icon.style.color = 'rgba(255,255,255,0.6)';
            icon.style.transform = 'scale(1)';
          }
        }}
      >
        <Bell
          style={{
            width: 15,
            height: 15,
            color: 'rgba(255,255,255,0.6)',
            transition: 'all 0.2s',
          }}
        />
        <span
          className={`${styles.pulseDot} animate-pulse`}
          style={{ boxShadow: '0 0 8px #FF4747' }}
        />
      </button>

      {/* Profile */}
      <button
        className={styles.profileBtn}
        style={{
          background: 'linear-gradient(135deg, #FF4747 0%, #FF4747 100%)',
          boxShadow: '0 4px 14px rgba(255, 71, 71, 0.25)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(-1px)';
          el.style.boxShadow = '0 6px 20px rgba(255, 71, 71, 0.4)';
          el.style.filter = 'brightness(1.08)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.transform = 'translateY(0)';
          el.style.boxShadow = '0 4px 14px rgba(255, 71, 71, 0.25)';
          el.style.filter = 'none';
        }}
      >
        <User style={{ width: 14, height: 14, color: '#fff' }} />
        <span
          className={styles.profileLabel}
          style={{
            color: '#fff',
            fontFamily: "'Cairo', sans-serif",
            fontWeight: 700,
          }}
        >
          دخول
        </span>
      </button>

      {/* Mobile hamburger */}
      <button
        className={`${styles.iconBtn} ${styles.hamburger}`}
        style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.background = 'rgba(255, 71, 71, 0.05)';
          el.style.borderColor = 'rgba(255, 71, 71, 0.3)';
          const icon = el.querySelector('svg') as SVGElement;
          if (icon) icon.style.color = '#ffffff';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.background = 'rgba(255, 255, 255, 0.03)';
          el.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          const icon = el.querySelector('svg') as SVGElement;
          if (icon) icon.style.color = 'rgba(255, 255, 255, 0.7)';
        }}
        onClick={onMobileToggle}
      >
        {mobileOpen ? (
          <X
            style={{
              width: 15,
              height: 15,
              color: 'rgba(255, 255, 255, 0.7)',
              transition: 'all 0.2s',
            }}
          />
        ) : (
          <Menu
            style={{
              width: 15,
              height: 15,
              color: 'rgba(255, 255, 255, 0.7)',
              transition: 'all 0.2s',
            }}
          />
        )}
      </button>
    </div>
  );
}

// ── MobileMenu ─────────────────────────────────────────────────────────────
interface MobileMenuProps {
  open: boolean;
  query: string;
  onQueryChange: (value: string) => void;
  onClose: () => void;
}

export function MobileMenu({
  open,
  query,
  onQueryChange,
  onClose,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      className={`${styles.mobileMenu} animate-fade-in`}
      style={{
        zIndex: 49,
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        background: 'rgba(15,15,15,0.96)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
      }}
    >
      <div className={styles.mobileLinks}>
        {NAV_LINKS.map((link, i) => {
          const isActive = i === 0;
          return (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileNavLink}
              style={{
                color: isActive ? '#FF4747' : 'rgba(255, 255, 255, 0.7)',
                background: isActive ? 'rgba(255, 71, 71, 0.08)' : 'transparent',
                fontFamily: "'Cairo', sans-serif",
                fontWeight: isActive ? 700 : 600,
              }}
              onClick={onClose}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Mobile search */}
      <div className={styles.mobileSearch}>
        <Search
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '12px',
            color: 'rgba(255,255,255,0.4)',
            width: 14,
            height: 14,
          }}
        />
        <input
          dir="rtl"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="البحث عن مانجا..."
          className={styles.mobileSearchInput}
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#ffffff',
            fontFamily: "'Cairo', sans-serif",
          }}
          onFocus={(e) => {
            e.target.style.background = 'rgba(0, 0, 0, 0.3)';
            e.target.style.borderColor = 'var(--primary)';
          }}
          onBlur={(e) => {
            e.target.style.background = 'rgba(255, 255, 255, 0.03)';
            e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
          }}
        />
      </div>
    </div>
  );
}

// ── Navbar Orchestrator ────────────────────────────────────────────────────
export function Navbar() {
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      dir="rtl"
      className={styles.header}
      style={{
        background: 'rgba(18, 18, 18, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className={styles.inner}>
        <NavLogo />
        <NavLinks />
        <NavActions
          query={query}
          onQueryChange={setQuery}
          mobileOpen={mobileOpen}
          onMobileToggle={() => setMobileOpen((v) => !v)}
        />
      </div>

      <MobileMenu
        open={mobileOpen}
        query={query}
        onQueryChange={setQuery}
        onClose={() => setMobileOpen(false)}
      />
    </header>
  );
}
