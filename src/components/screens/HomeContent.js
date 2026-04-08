import { Search, List, PlayCircle, TrendingUp } from 'lucide-react';
import { STOCKS } from '../../data/mockData';

export default function HomeContent({ onSelectQuery }) {
  return (
    <div className="animate-fade-in" style={{ padding: '24px', paddingBottom: '90px' }}>
      
      {/* Search Input Simulation */}
      <div style={{ position: 'relative', marginBottom: '32px' }}>
        <Search size={20} color="var(--text-tertiary)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
        <input 
          type="text" 
          placeholder="Search equities..." 
          style={{
            width: '100%',
            padding: '16px 16px 16px 48px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-color)',
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            fontSize: '15px',
            outline: 'none',
          }}
        />
      </div>

      {/* Quick Links */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
        <button style={{
          padding: '24px 16px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '12px',
          cursor: 'pointer'
        }}>
          <List size={24} color="var(--accent-primary)" />
          <div style={{ textAlign: 'left' }}>
            <span style={{ display: 'block', fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>List of Stocks</span>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>View all covered equities</span>
          </div>
        </button>

        <button style={{
          padding: '24px 16px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '12px',
          cursor: 'pointer'
        }}>
          <PlayCircle size={24} color="var(--success-color)" />
          <div style={{ textAlign: 'left' }}>
            <span style={{ display: 'block', fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>Lessons</span>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Continue your education</span>
          </div>
        </button>
      </div>

      {/* Progress Bar */}
      <div style={{ 
        backgroundColor: 'var(--bg-color)', 
        padding: '20px', 
        borderRadius: 'var(--radius-lg)', 
        border: '1px solid var(--border-color)',
        marginBottom: '32px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '14px', fontWeight: '600' }}>Learning Progress</span>
          <span style={{ fontSize: '14px', color: 'var(--accent-primary)', fontWeight: '600' }}>Module 3 / 10</span>
        </div>
        <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ width: '30%', height: '100%', backgroundColor: 'var(--accent-primary)' }}></div>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '12px' }}>Resume: "Understanding Financial Health & Debt"</p>
      </div>

      {/* Popular Stocks Panel */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Popular Equities</h3>
        <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Swipe left</span>
      </div>
      
      <div className="no-scrollbar" style={{ 
        display: 'flex', 
        gap: '16px', 
        overflowX: 'auto', 
        paddingBottom: '16px',
        margin: '0 -24px',
        padding: '0 24px 16px 24px'
      }}>
        {STOCKS.map((stock) => (
          <button 
            key={stock.symbol}
            onClick={() => onSelectQuery(`Analyze ${stock.name}`)}
            style={{
              minWidth: '160px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              textAlign: 'left',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: '600' }}>{stock.symbol.split('.')[0]}</span>
              <TrendingUp size={14} color={stock.trend === 'up' ? "var(--success-color)" : stock.trend === 'down' ? "var(--danger-color)" : "var(--text-tertiary)"} />
            </div>
            <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>₹{stock.price}</div>
            <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>{stock.sector}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
