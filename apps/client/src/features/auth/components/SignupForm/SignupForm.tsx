'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User, ArrowRight, ShieldAlert } from 'lucide-react';
import styles from './SignupForm.module.css';

export function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (password !== confirmPassword) {
      setErrorMsg('كلمتا المرور غير متطابقتين!');
      return;
    }

    if (!agreeTerms) {
      setErrorMsg('يجب عليك الموافقة على شروط الخدمة وسياسة الخصوصية.');
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('تم إنشاء الحساب بنجاح! (محاكاة)');
    }, 1500);
  };

  return (
    <div className={styles.container} dir="rtl">
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>إنشاء حساب جديد</h2>
          <p className={styles.subtitle}>انضم إلى مجتمع Fury لقراءة المانجا والمانهوا الحصرية</p>
        </div>

        {/* Error Notification */}
        {errorMsg && (
          <div className={`${styles.errorAlert} animate-fade-in`}>
            <ShieldAlert className={styles.alertIcon} />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Username Input */}
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>
              اسم المستخدم
            </label>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} />
              <input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="fury_reader"
                className={styles.input}
              />
            </div>
          </div>

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

          {/* Password Input */}
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              كلمة المرور
            </label>
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

          {/* Confirm Password Input */}
          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              تأكيد كلمة المرور
            </label>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} />
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className={styles.input}
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'إخفاء تأكيد كلمة المرور' : 'إظهار تأكيد كلمة المرور'}
              >
                {showConfirmPassword ? <EyeOff className={styles.eyeIcon} /> : <Eye className={styles.eyeIcon} />}
              </button>
            </div>
          </div>

          {/* Terms checkbox */}
          <div className={styles.optionsRow}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className={styles.hiddenCheckbox}
              />
              <span className={`${styles.checkboxBox} ${agreeTerms ? styles.checked : ''}`}>
                {agreeTerms && <span className={styles.checkmark} />}
              </span>
              <span className={styles.checkboxText}>
                أوافق على{' '}
                <a href="#" className={styles.inlineLink}>
                  شروط الخدمة
                </a>{' '}
                و{' '}
                <a href="#" className={styles.inlineLink}>
                  سياسة الخصوصية
                </a>
              </span>
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
                <span>إنشاء الحساب</span>
                <ArrowRight className={styles.arrowIcon} />
              </>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <div className={styles.cardFooter}>
          <p className={styles.footerText}>
            لديك حساب بالفعل؟{' '}
            <a href="/login" className={styles.footerLink}>
              تسجيل الدخول
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
