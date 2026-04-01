import ThemeToggle from './ThemeToggle';

export default function Header({ title, rightContent }) {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      backgroundColor: 'var(--bg-color)',
      borderBottom: '1px solid var(--border-color)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <h1 style={{ 
        fontSize: '1.25rem', 
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        {title}
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {rightContent}
        <ThemeToggle />
      </div>
    </header>
  );
}
