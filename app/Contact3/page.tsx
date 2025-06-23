// app/Contact3/page.tsx
"use client";

import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('../components/SvgGlobe'), { 
  ssr: false,
  loading: () => <p>Loading globe...</p>
});

export default function Contact3() {
  return (
    <div>
      <Globe />
    </div>
  );
}