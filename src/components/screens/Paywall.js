import { CheckCircle } from 'lucide-react';

export default function Paywall() {
  return (
    <div className="animate-slide-up" style={{ padding: '20px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '700', textAlign: 'center', marginBottom: '8px' }}>Unlock Unlimited Insights</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '32px' }}>Make informed decisions without limits.</p>

        <div style={{ backgroundColor: 'var(--bg-secondary)', border: '2px solid var(--accent-primary)', borderRadius: '20px', padding: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '600' }}>Premium</h3>
            <div>
              <span style={{ fontSize: '2rem', fontWeight: '700' }}>₹499</span>
              <span style={{ color: 'var(--text-secondary)' }}>/mo</span>
            </div>
          </div>

          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              'Unlimited stock queries',
              'Advanced risk analysis maps',
              'Ad-free experience',
              'Priority AI processing'
            ].map((feature, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.05rem' }}>
                <CheckCircle size={20} color="var(--success-color)" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button style={{
          width: '100%',
          padding: '18px',
          backgroundColor: 'var(--accent-primary)',
          color: 'var(--bubble-user-text)',
          border: 'none',
          borderRadius: '16px',
          fontSize: '1.15rem',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 14px var(--accent-glow)'
        }}>
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
