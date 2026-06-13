'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';
import styles from './LoginForm.module.css';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('تم تسجيل الدخول بنجاح! (محاكاة)');
    }, 1500);
  };

  return (
    <div className={styles.container} dir="rtl">
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>تسجيل الدخول</h2>
          <p className={styles.subtitle}>مرحباً بك مجدداً في منصة Fury المفضلة لديك</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Email Input */}
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>
              البريد الإلكتروني أو اسم المستخدم
            </label>
            <div className={styles.inputWrapper}>
              <Mail className={styles.inputIcon} />
              <input
                id="email"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className={styles.input}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className={styles.inputGroup}>
            <div className={styles.labelRow}>
              <label htmlFor="password" className={styles.label}>
                كلمة المرور
              </label>
              <a href="/forgot-password" className={styles.forgotLink}>
                نسيت كلمة المرور؟
              </a>
            </div>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={styles.input}
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
              >
                {showPassword ? <EyeOff className={styles.eyeIcon} /> : <Eye className={styles.eyeIcon} />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className={styles.optionsRow}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className={styles.hiddenCheckbox}
              />
              <span className={`${styles.checkboxBox} ${rememberMe ? styles.checked : ''}`}>
                {rememberMe && <span className={styles.checkmark} />}
              </span>
              <span className={styles.checkboxText}>تذكرني على هذا الجهاز</span>
            </label>
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
                <span>تسجيل الدخول</span>
                <ArrowRight className={styles.arrowIcon} />
              </>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className={styles.cardFooter}>
          <p className={styles.footerText}>
            ليس لديك حساب؟{' '}
            <a href="/signup" className={styles.footerLink}>
              إنشاء حساب جديد
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
