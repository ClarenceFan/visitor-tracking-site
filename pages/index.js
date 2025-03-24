import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        language: navigator.language
      })
    });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>欢迎来到我的网站</h1>
      <p>你的一次访问已被记录。</p>
    </div>
  );
}
