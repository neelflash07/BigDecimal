'use client';
import { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Onboarding from '../components/screens/Onboarding';
import HomeContent from '../components/screens/HomeContent';
import ChatInterface from '../components/screens/ChatInterface';
import Paywall from '../components/screens/Paywall';
import Profile from '../components/screens/Profile';
import Search from '../components/screens/Search';
import Compare from '../components/screens/Compare';
import Learn from '../components/screens/Learn';
import { User } from 'lucide-react';

export default function MainApp() {
  // We simulate successful OTP/Google login by setting this to true later
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('home'); 
  const [activeQuery, setActiveQuery] = useState(null);

  if (!isAuthenticated) {
    return <Onboarding onLogin={() => setIsAuthenticated(true)} />;
  }

  const handleSelectQuery = (query) => {
    setActiveQuery(query);
    setActiveTab('chat');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeContent onSelectQuery={handleSelectQuery} />;
      case 'search':
        return <Search />;
      case 'compare':
        return <Compare />;
      case 'learn':
        return <Learn />;
      case 'chat':
        return <ChatInterface initialQuery={activeQuery} />;
      case 'profile':
        return <Profile onLogout={() => setIsAuthenticated(false)} onUpgrade={() => setActiveTab('paywall')} />;
      case 'paywall':
        return <Paywall />;
      default:
        return <HomeContent />;
    }
  };

  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'home': return 'Portfolio Overview';
      case 'search': return 'Markets';
      case 'compare': return 'Analysis';
      case 'learn': return 'Intelligence Academy';
      case 'chat': return 'AI Terminal';
      case 'profile': return 'Account Settings';
      case 'paywall': return 'Premium Access';
      default: return 'Eq Intelligence';
    }
  }

  const renderRightContent = () => {
    // Only show profile icon on non-profile pages if we want, or just Home
    if (activeTab === 'home' || activeTab === 'search' || activeTab === 'compare' || activeTab === 'learn') {
      return (
        <button 
          onClick={() => setActiveTab('profile')} 
          style={{
            background: 'var(--bg-tertiary)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-primary)'
          }}
        >
          <User size={18} />
        </button>
      );
    }
    return null;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--bg-color)', overflow: 'hidden' }}>
      <Header title={getHeaderTitle()} rightContent={renderRightContent()} />
      
      <main style={{ flex: 1, overflowY: 'auto', backgroundColor: 'var(--bg-color)' }} className="no-scrollbar">
        {renderContent()}
      </main>

      {/* Conditionally render bottom nav - hide on full screen states like paywall, chat, profile */}
      {['home', 'search', 'compare', 'learn'].includes(activeTab) && (
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </div>
  );
}
