import { LogOut, Crown, Activity } from 'lucide-react';

export default function Profile({ onLogout, onUpgrade }) {
  return (
    <div className="animate-slide-up" style={{ padding: '20px', paddingBottom: '80px', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '32px', backgroundColor: 'var(--accent-glow)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-primary)' }}>N</span>
        </div>
        <div>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '600' }}>Investor</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Free Plan</p>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Account</h3>
        
        <button onClick={onUpgrade} style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--accent-primary)',
          borderRadius: '12px',
          cursor: 'pointer',
          marginBottom: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Crown size={20} color="var(--warning-color)" />
            <span style={{ fontWeight: '500', color: 'var(--text-primary)' }}>Upgrade to Premium</span>
          </div>
          <span style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>Explore</span>
        </button>

        <button style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '12px',
          cursor: 'pointer',
          marginBottom: '12px'
        }}>
          <Activity size={20} color="var(--text-secondary)" />
          <span style={{ fontWeight: '500', color: 'var(--text-primary)' }}>Query History (Locked)</span>
        </button>
      </div>

      <button onClick={onLogout} style={{
        marginTop: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '16px',
        backgroundColor: 'var(--bg-tertiary)',
        color: 'var(--text-primary)',
        border: 'none',
        borderRadius: '12px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer'
      }}>
        <LogOut size={18} />
        Log Out
      </button>

    </div>
  );
}
