import { useState, useRef, useEffect } from 'react';
import { Send, BookOpen, AlertTriangle, Lightbulb } from 'lucide-react';
import { INTENT_RESPONSES } from '../../data/mockData';

export default function ChatInterface() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hi! I am your AI stock guide. Which bluechip company do you want to analyze today?', sender: 'ai', type: 'text' }
  ]);
  const [input, setInput] = useState('');
  const endOfMessagesRef = useRef(null);

  const followUps = ['Explain simply', 'Show financial health', 'Price trend'];

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text) => {
    const query = text || input;
    if (!query.trim()) return;

    setMessages(prev => [...prev, { id: Date.now(), text: query, sender: 'user', type: 'text' }]);
    setInput('');

    // Simulate AI response delay
    setTimeout(() => {
      let responseKey = 'BUSINESS_MODEL';
      if (query.toLowerCase().includes('health')) responseKey = 'FINANCIAL_HEALTH';
      if (query.toLowerCase().includes('trend')) responseKey = 'PRICE_TREND';

      // Check block rule
      if (query.toLowerCase().includes('buy') || query.toLowerCase().includes('sell')) {
        setMessages(prev => [...prev, { 
          id: Date.now(), 
          text: 'I cannot provide buy/sell advice. I am here to help you learn and analyze the business objectively. Try asking about the company\'s financial health instead.', 
          sender: 'ai', 
          type: 'text' 
        }]);
        return;
      }

      setMessages(prev => [...prev, {
        id: Date.now(),
        sender: 'ai',
        type: 'structured',
        data: INTENT_RESPONSES[responseKey]
      }]);
    }, 1000);
  };

  const AIResponseCard = ({ data }) => (
    <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '16px', borderRadius: '16px', border: '1px solid var(--border-color)', marginBottom: '8px', width: '90%' }}>
      
      {/* Explanation */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <BookOpen size={18} color="#3b82f6" style={{ marginTop: '2px', flexShrink: 0 }} />
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '4px', color: 'var(--text-primary)' }}>Simple Explanation</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{data.explanation}</p>
        </div>
      </div>

      {/* Risks */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', padding: '12px', backgroundColor: 'var(--accent-glow)', borderRadius: '8px', borderLeft: '4px solid var(--danger-color)' }}>
        <AlertTriangle size={18} color="var(--danger-color)" style={{ marginTop: '2px', flexShrink: 0 }} />
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '4px', color: 'var(--text-primary)' }}>Key Risks</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{data.risks}</p>
        </div>
      </div>

      {/* Insight */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <Lightbulb size={18} color="var(--warning-color)" style={{ marginTop: '2px', flexShrink: 0 }} />
        <div>
          <h4 style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '4px', color: 'var(--text-primary)' }}>Beginner Insight</h4>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: '1.4', fontStyle: 'italic' }}>{data.insight}</p>
        </div>
      </div>

    </div>
  );

  return (
    <div className="animate-slide-up" style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)', paddingBottom: '70px' }}>
      
      {/* Chat History */}
      <div className="no-scrollbar" style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        {messages.map(msg => (
          <div key={msg.id} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start', marginBottom: '16px' }}>
            {msg.type === 'text' ? (
              <div style={{
                backgroundColor: msg.sender === 'user' ? 'var(--bubble-user)' : 'var(--bg-secondary)',
                color: msg.sender === 'user' ? 'var(--bubble-user-text)' : 'var(--text-primary)',
                padding: '12px 16px',
                borderRadius: '16px',
                borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                borderBottomLeftRadius: msg.sender === 'ai' ? '4px' : '16px',
                maxWidth: '85%',
                lineHeight: '1.4',
                fontSize: '0.95rem'
              }}>
                {msg.text}
              </div>
            ) : (
              <AIResponseCard data={msg.data} />
            )}
          </div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>

      {/* Input Area */}
      <div style={{ position: 'fixed', bottom: '60px', width: '100%', maxWidth: '480px', backgroundColor: 'var(--bg-color)', padding: '12px 20px', borderTop: '1px solid var(--border-color)' }}>
        
        {/* Chips */}
        <div className="no-scrollbar" style={{ display: 'flex', gap: '8px', overflowX: 'auto', marginBottom: '12px', paddingBottom: '4px' }}>
          {followUps.map(chip => (
            <button key={chip} onClick={() => handleSend(chip)} style={{
              whiteSpace: 'nowrap',
              backgroundColor: 'var(--chip-bg)',
              color: 'var(--chip-text)',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              {chip}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about a stock..." 
            style={{
              flex: 1,
              padding: '14px 16px',
              borderRadius: '24px',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              outline: 'none'
            }}
          />
          <button onClick={() => handleSend()} style={{
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--bubble-user-text)',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            flexShrink: 0
          }}>
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
