'use client';
import { useState } from 'react';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Onboarding from '../components/screens/Onboarding';
import HomeContent from '../components/screens/HomeContent';
import ChatInterface from '../components/screens/ChatInterface';
import Paywall from '../components/screens/Paywall';
import Profile from '../components/screens/Profile';

export default function MainApp() {
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
      case 'home': return 'Discover';
      case 'chat': return 'Insights';
      case 'profile': return 'My Account';
      case 'paywall': return 'Premium Plan';
      default: return 'Bluechip Insights';
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'var(--bg-color)', overflow: 'hidden' }}>
      <Header title={getHeaderTitle()} />
      
      <main style={{ flex: 1, overflowY: 'auto', backgroundColor: 'var(--bg-color)' }}>
        {renderContent()}
      </main>

      {/* Conditionally render bottom nav - hide on paywall */}
      {activeTab !== 'paywall' && (
        <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </div>
  );
}
