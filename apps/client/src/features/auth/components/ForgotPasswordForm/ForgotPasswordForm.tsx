'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import styles from './ForgotPasswordForm.module.css';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <div className={styles.container} dir="rtl">
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>استعادة كلمة المرور</h2>
          <p className={styles.subtitle}>
            {isSent 
              ? 'يرجى التحقق من صندوق الوارد الخاص بك' 
              : 'أدخل بريدك الإلكتروني وسنرسل لك رابطاً لإعادة تعيين كلمة المرور'}
          </p>
        </div>

        {isSent ? (
          <div className={styles.successState}>
            <div className={styles.successIconWrapper}>
              <ShieldCheck className={styles.successIcon} />
            </div>
            <p className={styles.successText}>
              لقد تم إرسال تعليمات استعادة كلمة المرور بنجاح إلى البريد الإلكتروني:
              <br />
              <strong>{email}</strong>
            </p>
            <a href="/login" className={styles.backBtn}>
              العودة لتسجيل الدخول
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Email Input */}
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                البريد الإلكتروني
              </label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.inputIcon} />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={styles.input}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`${styles.submitBtn} ${isLoading ? styles.loading : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className={styles.spinner} />
              ) : (
                <>
                  <span>إرسال رابط الاستعادة</span>
                  <ArrowRight className={styles.arrowIcon} />
                </>
              )}
            </button>

            {/* Back to Login Link */}
            <div className={styles.cardFooter}>
              <a href="/login" className={styles.footerLink}>
                العودة لتسجيل الدخول
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
