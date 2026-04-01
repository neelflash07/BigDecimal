export const STOCKS = [
  { symbol: 'RELIANCE.NS', name: 'Reliance Industries', sector: 'Conglomerate', price: 2950.45, trend: 'up' },
  { symbol: 'HDFCBANK.NS', name: 'HDFC Bank', sector: 'Banking', price: 1540.20, trend: 'sideways' },
  { symbol: 'TCS.NS', name: 'Tata Consultancy Services', sector: 'IT Services', price: 3980.10, trend: 'up' },
  { symbol: 'INFY.NS', name: 'Infosys', sector: 'IT Services', price: 1450.75, trend: 'down' },
  { symbol: 'ICICIBANK.NS', name: 'ICICI Bank', sector: 'Banking', price: 1080.30, trend: 'up' }
];

export const INTENT_RESPONSES = {
  'BUSINESS_MODEL': {
    explanation: 'Reliance Industries is a massive Indian conglomerate. It started in oil and petrochemicals, but makes a huge chunk of its money today from Jio (telecom) and Reliance Retail (supermarkets and fashion).',
    risks: 'Because it operates in many sectors, it faces high capital expenditure (spending a lot of money to grow) and regulatory risks across different industries.',
    insight: 'Conglomerates offer diversification. When one sector (like oil) is down, another (like telecom) can keep the company stable.'
  },
  'FINANCIAL_HEALTH': {
    explanation: 'HDFC Bank is highly profitable with strong cash flows. It has a massive deposit base and consistently grows its loan book, showing robust financial stability.',
    risks: 'High interest rates can slow down loan growth. Also, managing the recent merger with HDFC Ltd requires significant operational efficiency.',
    insight: 'For banks, look at "NPA" (Non-Performing Assets) — this tells you how many loans are going bad. Lower is always better.'
  },
  'PRICE_TREND': {
    explanation: 'TCS has been in a strong upward trend recently, moving past its 50-day average. This means buyers are currently overpowering sellers.',
    risks: 'No trend lasts forever. If the global IT sector slows down, the stock could face resistance and pull back.',
    insight: 'Remember: Trend is your friend, but don\'t chase a stock just because it\'s going up. Look at the underlying business.'
  }
};
