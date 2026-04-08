import { Home, Search, BarChart2, BookOpen } from 'lucide-react';

export default function BottomNav({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Overview' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'compare', icon: BarChart2, label: 'Compare' },
    { id: 'learn', icon: BookOpen, label: 'Learn' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
      maxWidth: '480px',
      backgroundColor: 'var(--bottom-nav-bg)',
      backdropFilter: 'blur(20px)',
      borderTop: '1px solid var(--border-color)',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '10px 0 24px 0', /* Added bottom padding for safe area */
      zIndex: 50
    }}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
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
              color: isActive ? 'var(--accent-primary)' : 'var(--text-tertiary)',
              transition: 'color 0.2s ease',
              flex: 1
            }}
          >
            <div style={{
               padding: '4px 12px',
               borderRadius: 'var(--radius-lg)',
               backgroundColor: isActive ? 'var(--accent-glow)' : 'transparent',
               marginBottom: '4px',
               transition: 'background-color 0.2s ease'
            }}>
              <tab.icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span style={{ 
              fontSize: '10px', 
              fontWeight: isActive ? '600' : '500',
              letterSpacing: '0.3px' 
            }}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
