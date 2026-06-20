import React from 'react';

type NavItem = {
  label: string;
  description: string;
  color: string;
  background: string;
};

const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    description: 'Overview and quick stats',
    color: '#083E96',
    background: '#E8EEF9',
  },
  {
    label: 'Accounts',
    description: 'Bank, cash, and cards',
    color: '#1A1A2E',
    background: '#FFFFFF',
  },
  {
    label: 'Expenses',
    description: 'Track spending and bills',
    color: '#C81026',
    background: '#FAEBED',
  },
  {
    label: 'Budgets',
    description: 'Set goals and limits',
    color: '#083E96',
    background: '#E8EEF9',
  },
  {
    label: 'Reports',
    description: 'Visualize finances',
    color: '#1A1A2E',
    background: '#FFFFFF',
  },
  {
    label: 'Settings',
    description: 'Preferences and security',
    color: '#1A1A2E',
    background: '#FFFFFF',
  },
];

const SideNavBar: React.FC = () => {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.brand}>
        <span style={styles.brandDot} />
        <div>
          <div style={styles.brandName}>Cash Soft</div>
          <div style={styles.brandTag}>Financial control</div>
        </div>
      </div>

      <nav style={styles.nav}>
        {navItems.map((item) => (
          <button key={item.label} style={{ ...styles.navItem, borderColor: item.background }}>
            <div style={{ ...styles.iconBadge, backgroundColor: item.background, color: item.color }}>
              {item.label.charAt(0)}
            </div>
            <div style={styles.itemText}>
              <span style={{ ...styles.itemLabel, color: item.color }}>{item.label}</span>
              <span style={styles.itemDescription}>{item.description}</span>
            </div>
          </button>
        ))}
      </nav>
    </aside>
  );
};

const styles: Record<string, React.CSSProperties> = {
  sidebar: {
    width: 280,
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    borderRight: '1px solid #E8EEF9',
    padding: '24px 16px',
    boxSizing: 'border-box',
    fontFamily: 'Inter, Arial, sans-serif',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 24,
  },
  brandDot: {
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: '#083E96',
    marginRight: 12,
  },
  brandName: {
    fontSize: 18,
    fontWeight: 700,
    color: '#1A1A2E',
  },
  brandTag: {
    marginTop: 4,
    fontSize: 12,
    color: '#6B7280',
  },
  nav: {
    display: 'grid',
    gap: 12,
  },
  navItem: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '12px 14px',
    borderRadius: 14,
    border: '1px solid transparent',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    textAlign: 'left',
  },
  iconBadge: {
    width: 42,
    height: 42,
    borderRadius: 12,
    display: 'grid',
    placeItems: 'center',
    fontWeight: 700,
    marginRight: 14,
    boxShadow: '0 2px 8px rgba(8, 62, 150, 0.12)',
  },
  itemText: {
    display: 'flex',
    flexDirection: 'column',
  },
  itemLabel: {
    fontSize: 15,
    fontWeight: 600,
  },
  itemDescription: {
    marginTop: 4,
    fontSize: 12,
    color: '#4B5563',
  },
};

export default SideNavBar;
