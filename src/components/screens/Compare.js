import { useState } from 'react';
import { Search, Info } from 'lucide-react';
import { STOCKS } from '../../data/mockData';

export default function Compare() {
  const [stock1, setStock1] = useState(STOCKS[0]);
  const [stock2, setStock2] = useState(STOCKS[3]);

  // Metric visualizer mapping
  const metrics = [
    { label: 'Sector', key: 'sector', isHigherBetter: null },
    { label: 'Market Cap', key: 'marketCap', isHigherBetter: null },
    { label: 'P/E Ratio', key: 'peRatio', isHigherBetter: false },
    { label: 'Debt to Equity', key: 'debtToEquity', isHigherBetter: false },
    { label: 'ROE (%)', key: 'roe', isHigherBetter: true },
    { label: 'Volatility', key: 'volatility', isHigherBetter: false },
    { label: 'Financial Health Score', key: 'healthScore', isHigherBetter: true }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '0 20px', paddingBottom: '100px' }}>
      
      {/* Header Selector Simulation */}
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        backgroundColor: 'var(--bg-color)', 
        paddingTop: '20px', 
        paddingBottom: '20px',
        borderBottom: '1px solid var(--border-color)',
        zIndex: 10,
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <div style={{ flex: 1, padding: '12px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', textAlign: 'center', fontWeight: '600' }}>
            {stock1.symbol.split('.')[0]}
          </div>
          <span style={{ fontSize: '13px', color: 'var(--text-tertiary)', fontWeight: '600' }}>VS</span>
          <div style={{ flex: 1, padding: '12px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--accent-primary)', textAlign: 'center', color: 'var(--accent-primary)', fontWeight: '600' }}>
            {stock2.symbol.split('.')[0]}
          </div>
        </div>
      </div>

      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.5' }}>
        Detailed fundamental comparison. Metrics highlighted in green represent a healthier/stronger position relative to the competitor.
      </p>

      {/* Comparisons Vertically Stacked strictly */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {metrics.map((metric) => {
          let val1 = stock1[metric.key];
          let val2 = stock2[metric.key];
          
          let color1 = 'var(--text-primary)';
          let color2 = 'var(--text-primary)';

          if (metric.isHigherBetter !== null && typeof val1 === 'number' && typeof val2 === 'number') {
            if (val1 > val2) {
              color1 = metric.isHigherBetter ? 'var(--success-color)' : 'var(--danger-color)';
              color2 = metric.isHigherBetter ? 'var(--text-primary)' : 'var(--success-color)';
            } else if (val2 > val1) {
              color1 = metric.isHigherBetter ? 'var(--text-primary)' : 'var(--success-color)';
              color2 = metric.isHigherBetter ? 'var(--success-color)' : 'var(--danger-color)';
            }
          }

          return (
            <div key={metric.key} style={{
              backgroundColor: 'var(--bg-color)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px', color: 'var(--text-secondary)' }}>
                <Info size={14} />
                <span style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{metric.label}</span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flex: 1, fontSize: '18px', fontWeight: '600', color: color1 }}>
                  {val1}
                </div>
                <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)', margin: '0 16px' }}></div>
                <div style={{ flex: 1, fontSize: '18px', fontWeight: '600', color: color2, textAlign: 'right' }}>
                  {val2}
                </div>
              </div>
            </div>
          );
        })}

        {/* Key Risk String Card */}
        <div style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-md)',
          padding: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px', color: 'var(--warning-color)' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Key Risks</span>
          </div>

          <div style={{ fontSize: '14px', lineHeight: '1.5', paddingBottom: '16px', borderBottom: '1px solid var(--border-color)' }}>
            <span style={{ fontWeight: '600', display: 'block', marginBottom: '4px' }}>{stock1.name}</span>
            <span style={{ color: 'var(--text-secondary)' }}>{stock1.keyRisk}</span>
          </div>
          
          <div style={{ fontSize: '14px', lineHeight: '1.5', paddingTop: '16px' }}>
            <span style={{ fontWeight: '600', display: 'block', marginBottom: '4px' }}>{stock2.name}</span>
            <span style={{ color: 'var(--text-secondary)' }}>{stock2.keyRisk}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
