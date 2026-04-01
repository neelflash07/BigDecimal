import { Home, MessageSquare, User } from 'lucide-react';

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      maxWidth: '480px',
      backgroundColor: 'var(--bottom-nav-bg)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid var(--border-color)',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '12px 0',
      zIndex: 50
    }}>
      {[
        { id: 'home', icon: Home, label: 'Home' },
        { id: 'chat', icon: MessageSquare, label: 'Chat' },
        { id: 'profile', icon: User, label: 'Profile' }
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
            color: activeTab === tab.id ? 'var(--accent-primary)' : 'var(--text-secondary)',
            fontWeight: activeTab === tab.id ? '600' : '400',
            transition: 'color 0.2s',
            gap: '4px'
          }}
        >
          <tab.icon size={22} />
          <span style={{ fontSize: '0.75rem' }}>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}
