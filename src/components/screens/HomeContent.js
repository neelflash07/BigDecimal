import { Search, Info, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react';
import { STOCKS } from '../../data/mockData';

export default function HomeContent({ onSelectQuery }) {
  const categories = [
    { title: 'Understand', icon: Info, color: '#3b82f6', queries: ['Explain company', 'Revenue model'] },
    { title: 'Analyze', icon: TrendingUp, color: '#10b981', queries: ['Financial strength', 'Profitability', 'Debt'] },
    { title: 'Price', icon: TrendingUp, color: '#8b5cf6', queries: ['Trend', 'Volatility', 'Momentum'] },
    { title: 'Risks', icon: AlertTriangle, color: '#ef4444', queries: ['Key risks', 'What can go wrong'] },
    { title: 'Insights', icon: Lightbulb, color: '#f59e0b', queries: ['Why price moved', 'Price vs fundamentals'] },
  ];

  return (
    <div className="animate-slide-up" style={{ padding: '20px', paddingBottom: '80px' }}>
      
      {/* Freemium Tracker */}
      <div style={{ 
        backgroundColor: 'var(--bg-secondary)', 
        padding: '16px', 
        borderRadius: '16px', 
        marginBottom: '24px',
        border: '1px solid var(--border-color)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>Daily Free Queries</span>
          <span style={{ fontSize: '0.9rem', color: 'var(--accent-primary)' }}>3 / 5</span>
        </div>
        <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: '60%', height: '100%', backgroundColor: 'var(--accent-primary)' }}></div>
        </div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '8px', textAlign: 'right' }}>Upgrade for unlimited access</p>
      </div>

      {/* Search Input */}
      <div style={{ position: 'relative', marginBottom: '32px' }}>
        <Search size={20} color="var(--text-secondary)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
        <input 
          type="text" 
          placeholder="Search bluechip (e.g., Reliance)" 
          style={{
            width: '100%',
            padding: '16px 16px 16px 48px',
            borderRadius: '16px',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            outline: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
          }}
        />
      </div>

      {/* Grid Categories */}
      <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Explore Context</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {categories.map((cat, idx) => (
          <div key={idx} style={{ 
             backgroundColor: 'var(--bg-secondary)',
             padding: '16px',
             borderRadius: '16px',
             border: '1px solid var(--border-color)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <cat.icon size={18} color={cat.color} />
              <span style={{ fontWeight: '600' }}>{cat.title}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {cat.queries.map(q => (
                <button 
                  key={q}
                  onClick={() => onSelectQuery(q)}
                  style={{
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-secondary)',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    padding: '4px 0',
                    transition: 'color 0.2s'
                  }}>
                  {q}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
