import { Navbar } from '@/features/home/components/Navbar/Navbar';
import { HeroSection } from '@/features/home/components/HeroSection/HeroSection';
import { TrendingSection } from '@/features/home/components/TrendingSection/TrendingSection';
import { DiscordBanner } from '@/features/home/components/DiscordBanner/DiscordBanner';
import { LatestReleases } from '@/features/home/components/LatestReleases/LatestReleases';
import { SuggestionsSection } from '@/features/home/components/SuggestionsSection/SuggestionsSection';
import { Footer } from '@/features/home/components/Footer/Footer';

export default function HomePage() {
  return (
    <div
      dir="rtl"
      style={{
        minHeight: '100vh',
        background: 'var(--background)',
        fontFamily: "'Cairo', 'Cairo Play', sans-serif",
        overflowX: 'hidden',
      }}
    >
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* 1 ── Navigation */}
        <Navbar />

        {/* 2 ── Hero + Genre Bar */}
        <HeroSection />

        {/* 3 ── Trending Works */}
        <div style={{ background: 'var(--background)' }}>
          <TrendingSection />
        </div>

        {/* 4 ── Main Content Layout */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '2rem 1rem',
          }}
        >
          <main style={{ width: '100%', minWidth: 0 }}>
            {/* Discord banner */}
            <DiscordBanner />

            {/* Latest Releases */}
            <LatestReleases />
          </main>
        </div>

        {/* 5 ── Suggestions (full-width) */}
        <div style={{ background: 'var(--background)' }}>
          <SuggestionsSection />
        </div>

        {/* 6 ── Footer */}
        <Footer />
      </div>
    </div>
  );
}
