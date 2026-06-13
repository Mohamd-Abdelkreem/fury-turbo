import type { Metadata } from 'next';
import { Navbar } from '@/features/home/components/Navbar/Navbar';
import { Footer } from '@/features/home/components/Footer/Footer';
import { ForgotPasswordForm } from '@/features/auth/components/ForgotPasswordForm/ForgotPasswordForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Fury - استعادة كلمة المرور',
  description: 'قم باستعادة كلمة المرور الخاصة بحسابك على منصة Fury.',
};

export default function ForgotPasswordPage() {
  return (
    <div className={styles.pageWrapper} dir="rtl">
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Navigation */}
        <Navbar minimal={true} />

        {/* Content Container */}
        <div className={styles.contentContainer}>
          <ForgotPasswordForm />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
