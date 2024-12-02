"use client";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex h-full items-center justify-center bg-white absolute w-full">
      <div className="flex flex-col flex-wrap items-center gap-3">
        <i className="fa-solid fa-gem fa-2xl text-green-800"></i>
        <span className='text-orange-500 mt-1 font-bold text-4xl'>Shopping@babi</span>
        <div className="grid gap-3">
          <div className="flex items-center justify-center">
            <svg className="animate-spin border-orange-500"
              xmlns="http://www.w3.org/2000/svg" width="36" height="36"
              viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="17" stroke="#ff9011"
                strokeWidth="2" strokeDasharray="6 6" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
