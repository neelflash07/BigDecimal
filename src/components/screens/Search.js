import { useState } from 'react';
import { Search as SearchIcon, Plus, Download } from 'lucide-react';

export default function Search() {
  const [query, setQuery] = useState('');
  
  const recentSearches = ['Zomato', 'Reliance Industries', 'Tata Motors', 'HDFC Bank', 'Infosys'];

  return (
    <div className="animate-fade-in" style={{ padding: '24px', paddingBottom: '90px' }}>
      
      {/* Sticky Search Bar */}
      <div style={{ position: 'sticky', top: '0', backgroundColor: 'var(--bg-color)', paddingTop: '8px', paddingBottom: '16px', zIndex: 10 }}>
        <div style={{ position: 'relative' }}>
          <SearchIcon size={20} color="var(--text-tertiary)" style={{ position: 'absolute', left: '16px', top: '16px' }} />
          <input 
            type="text" 
            placeholder="Search by company name or symbol..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 16px 16px 48px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--accent-primary)',
              backgroundColor: 'var(--bg-color)',
              color: 'var(--text-primary)',
              fontSize: '15px',
              outline: 'none',
              boxShadow: '0 0 0 3px var(--accent-glow)'
            }}
          />
        </div>
      </div>

      {/* Horizontal Recent Searches */}
      <div style={{ marginBottom: '40px', marginTop: '8px' }}>
        <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '16px' }}>Recent Searches</h4>
        <div className="no-scrollbar" style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
          {recentSearches.map(term => (
            <button key={term} style={{
              padding: '8px 16px',
              borderRadius: '20px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              fontSize: '13px',
              whiteSpace: 'nowrap',
              cursor: 'pointer'
            }}>
              {term}
            </button>
          ))}
        </div>
      </div>

      {/* Utility Actions */}
      <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '16px' }}>Portfolio Tools</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <button style={{
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          cursor: 'pointer',
          textAlign: 'left'
        }}>
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '10px', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <Plus size={20} color="var(--accent-primary)" />
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>Create Watchlist</div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Track your favourite Indian stocks.</div>
          </div>
        </button>

        <button style={{
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          cursor: 'pointer',
          textAlign: 'left'
        }}>
          <div style={{ backgroundColor: 'var(--bg-color)', padding: '10px', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <Download size={20} color="var(--accent-primary)" />
          </div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '4px' }}>Import Portfolio</div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Sync your portfolio securely.</div>
          </div>
        </button>
      </div>

    </div>
  );
}
