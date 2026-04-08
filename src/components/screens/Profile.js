import { Settings, CreditCard, Clock, Bookmark, HelpCircle, LogOut, ChevronRight } from 'lucide-react';

export default function Profile({ onLogout, onUpgrade }) {
  const menuItems = [
    { icon: Settings, label: 'Settings & Preferences', type: 'link' },
    { icon: CreditCard, label: 'Subscription Details', type: 'action', onClick: onUpgrade },
    { icon: Clock, label: 'Learning History', type: 'link' },
    { icon: Bookmark, label: 'Saved Equities', type: 'link' },
    { icon: HelpCircle, label: 'Help & Support', type: 'link' },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '0', paddingBottom: '90px' }}>
      
      {/* Header Info */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '32px 24px', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>
         <div style={{ 
          width: '80px', 
          height: '80px', 
          backgroundColor: 'var(--accent-primary)', 
          borderRadius: '50%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          margin: '0 auto 16px',
          color: '#fff',
          fontSize: '32px',
          fontWeight: '600',
          boxShadow: '0 4px 12px rgba(29, 78, 216, 0.2)'
         }}>
           A
         </div>
         <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '4px' }}>Alex Investor</h2>
         <p style={{ color: 'var(--text-tertiary)', fontSize: '14px', marginBottom: '16px' }}>+91 98765 43210</p>
         
         <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 12px', backgroundColor: 'var(--success-color)', borderRadius: '20px', color: '#fff' }}>
           <span style={{ width: '6px', height: '6px', backgroundColor: '#fff', borderRadius: '50%', display: 'inline-block' }}></span>
           <span style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.5px' }}>PRO TIER</span>
         </div>
      </div>

      <div style={{ padding: '24px' }}>
        <h4 style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '16px' }}>
          Account Navigation
        </h4>
        
        <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: idx !== menuItems.length - 1 ? '1px solid var(--border-color)' : 'none',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <item.icon size={20} color="var(--text-secondary)" />
                <span style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text-primary)' }}>{item.label}</span>
              </div>
              <ChevronRight size={16} color="var(--text-tertiary)" />
            </button>
          ))}
        </div>

        <button 
          onClick={onLogout}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '32px',
            padding: '16px',
            backgroundColor: 'transparent',
            border: '1px solid var(--danger-color)',
            color: 'var(--danger-color)',
            borderRadius: 'var(--radius-md)',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          <LogOut size={18} />
          Sign Out of Account
        </button>
      </div>
    </div>
  );
}
