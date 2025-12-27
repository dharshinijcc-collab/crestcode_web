'use client';
import PrivacyPage from '@/components/privacy-page';
import React from 'react';
import { usePageTitle } from '../common';

const page = () => {
  usePageTitle("Privacy Policy");

  return (
    <div>
      <PrivacyPage />
    </div>
  );
}

export default page;
