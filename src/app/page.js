"use client";

import dynamic from 'next/dynamic';

// Dynamically import the AppRouter with no SSR to avoid hydration issues
const AppRouter = dynamic(
  () => import('./routes'),
  { ssr: false }
);

export default function Home() {
  return <AppRouter />;
}
