import type { Metadata } from 'next';
import { Navbar } from '@/features/home/components/Navbar/Navbar';
import { Footer } from '@/features/home/components/Footer/Footer';
import { SignupForm } from '@/features/auth/components/SignupForm/SignupForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Fury - إنشاء حساب جديد',
  description: 'قم بإنشاء حساب جديد على منصة Fury للانضمام إلى مجتمع قراءة المانجا والأنمي.',
};

export default function SignupPage() {
  return (
    <div className={styles.pageWrapper} dir="rtl">
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Navigation */}
        <Navbar minimal={true} />

        {/* Content Container */}
        <div className={styles.contentContainer}>
          <SignupForm />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
