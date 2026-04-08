export const STOCKS = [
  { 
    symbol: 'RELIANCE.NS', 
    name: 'Reliance Industries', 
    sector: 'Conglomerate', 
    price: 2950.45, 
    trend: 'up',
    marketCap: '₹19.9L Cr',
    peRatio: 28.4,
    debtToEquity: 0.4,
    roe: 9.3,
    volatility: 'Low',
    healthScore: 85,
    keyRisk: 'Highly capital intensive operations and regulatory hurdles in telecom.'
  },
  { 
    symbol: 'HDFCBANK.NS', 
    name: 'HDFC Bank', 
    sector: 'Banking', 
    price: 1540.20, 
    trend: 'sideways',
    marketCap: '₹11.7L Cr',
    peRatio: 16.2,
    debtToEquity: 1.1,
    roe: 16.8,
    volatility: 'Low',
    healthScore: 92,
    keyRisk: 'Integration risks post-merger with HDFC Ltd and rising NPA margins.'
  },
  { 
    symbol: 'TCS.NS', 
    name: 'Tata Consultancy Services', 
    sector: 'IT Services', 
    price: 3980.10, 
    trend: 'up',
    marketCap: '₹14.4L Cr',
    peRatio: 31.5,
    debtToEquity: 0.08,
    roe: 43.1,
    volatility: 'Medium',
    healthScore: 88,
    keyRisk: 'Global macroeconomic slowdown impacting IT spends in US/Europe.'
  },
  { 
    symbol: 'ZOMATO.NS', 
    name: 'Zomato', 
    sector: 'Consumer Tech', 
    price: 185.75, 
    trend: 'up',
    marketCap: '₹1.6L Cr',
    peRatio: 110.2, // High due to nascent profitability
    debtToEquity: 0.05,
    roe: 3.2,
    volatility: 'High',
    healthScore: 65,
    keyRisk: 'High cash burn to maintain market share and changing labor regulations.'
  },
  { 
    symbol: 'PAYTM.NS', 
    name: 'One97 Communications', 
    sector: 'Fintech', 
    price: 395.30, 
    trend: 'down',
    marketCap: '₹0.25L Cr',
    peRatio: -15.4, // Negative due to losses
    debtToEquity: 0.1,
    roe: -12.4,
    volatility: 'High',
    healthScore: 40,
    keyRisk: 'Severe regulatory clampdowns by RBI and intense competition.'
  },
  { 
    symbol: 'TATAMOTORS.NS', 
    name: 'Tata Motors', 
    sector: 'Automobile', 
    price: 995.60, 
    trend: 'up',
    marketCap: '₹3.3L Cr',
    peRatio: 18.5,
    debtToEquity: 1.2,
    roe: 22.1,
    volatility: 'Medium',
    healthScore: 78,
    keyRisk: 'Cyclical auto demand and JLR global supply chain issues.'
  }
];

export const INTENT_RESPONSES = {
  'BUSINESS_MODEL': {
    explanation: 'A quick overview of the entity. They generate revenue through core operations and expanding subsidiaries.',
    risks: 'Key risks involve macroeconomic slowdowns or sector-specific capital expenditure delays.',
    insight: 'Always map out where the cash flow originates rather than just checking profit numbers.'
  }
};
