import { useState } from 'react';
import Header from '../Header';
import { Target } from 'lucide-react';

export default function Onboarding({ onLogin }) {
  const [phone, setPhone] = useState('');

  return (
    <div className="animate-slide-up" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-color)' }}>
      <Header title="Bluechip Insights" />
      <main style={{ padding: '32px 20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
        <Target size={64} color="var(--accent-primary)" style={{ marginBottom: '24px' }} />
        <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '16px' }}>Master Bluechip Investing</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '1.1rem', lineHeight: '1.5' }}>
          We don’t tell you what to buy. We help you understand what you are looking at.
        </p>

        <div style={{ width: '100%', maxWidth: '320px' }}>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              marginBottom: '16px',
              outline: 'none'
            }}
          />
          <button
            onClick={() => onLogin(phone)}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--bubble-user-text)',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1.1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'opacity 0.2s'
            }}
          >
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}
