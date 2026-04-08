import { BookOpen, MonitorPlay, MessageSquare } from 'lucide-react';

export default function Learn() {
  const modules = [
    { title: 'Decoding Financial Statements', type: 'video', duration: '12 min' },
    { title: 'Risk vs Reward Profiles', type: 'document', duration: '8 min read' },
    { title: 'The P/E Ratio Fallacy', type: 'video', duration: '15 min' },
    { title: 'Understanding Market Cycles', type: 'document', duration: '10 min read' }
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '0 20px', paddingBottom: '90px' }}>
      <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.5', padding: '24px 0', borderBottom: '1px solid var(--border-color)', marginBottom: '24px' }}>
        Institutional-grade educational modules designed for retail empowerment.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {modules.map((mod, idx) => (
          <div key={idx} style={{
             backgroundColor: 'var(--bg-secondary)',
             border: '1px solid var(--border-color)',
             borderRadius: 'var(--radius-lg)',
             padding: '20px',
             display: 'flex',
             gap: '16px',
             alignItems: 'center',
             cursor: 'pointer'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'var(--bg-color)',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}>
              {mod.type === 'video' ? <MonitorPlay size={20} color="var(--accent-primary)"/> : <BookOpen size={20} color="var(--warning-color)"/>}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{mod.title}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-tertiary)' }}>{mod.duration}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating AI Helper specific to Learn */}
      <button style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        backgroundColor: 'var(--accent-primary)',
        color: '#fff',
        border: 'none',
        borderRadius: '24px',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 4px 12px var(--accent-glow)',
        cursor: 'pointer',
        zIndex: 100
      }}>
        <MessageSquare size={20} />
        <span style={{ fontSize: '14px', fontWeight: '600' }}>Ask AI Assistant</span>
      </button>

    </div>
  );
}
